import { useState } from "react";
import { Controller, Form, useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import IntervalSelector from "./IntervalSelector.tsx";
import ky from "ky";
import { PlantSchema } from "../types.ts";

const IsoDateOrUndefined = z.string()
  .transform(s => {
    if (s === "") {
      return undefined
    }
    return s;
  }).pipe(z.iso.date("Bitte gib ein gültiges Datum im Format YYYY-MM-DD an.").optional())

const PlantFormStateSchema = z.object({
  name: z.string().nonempty("Bitte gib einen Pflanzennamen an"),
  location: z.string().nonempty("Bitte gib den Standort der Pflanze an"),
  wateringInterval: z.number().min(1),
  lastWatered: IsoDateOrUndefined.refine(v => {
    if (v===undefined) {
      // kein Datum gesetzt => gültig!
      return true;
    }

    const now = Date.now();

    if (Date.parse(v) <= now) {
      return true;
    }

    return false;

  }, {
    error: "Das Datum muss in der Vergangenheit liegen!"
  })
})

type PlantFormState = z.infer<typeof PlantFormStateSchema>


export default function PlantForm() {

  // const {
  //   register,
  //   handleSubmit,
  //   setError,
  //   formState: { errors },
  // } = useForm({
  //   resolver: zodResolver(PlantFormStateSchema)
  // })

  const form = useForm({
    resolver: zodResolver(PlantFormStateSchema),
    // defaultValues: befüllen das Formular vor
    //   z.B. mit Daten, die vom Server gelesen wurden
    defaultValues: {
      name: "",
      location: "Schlafzimmer",
      lastWatered: ""
    },
    // mode gibt an, wann validiert wird
    mode: "onBlur"
  });

  async function handleSave(data: PlantFormState) {
    console.log("DATA im Formular", data);

    const response = await ky.post("http://localhost:7200/api/plants", {
     json:  data
    }).json();

    const newPlant = PlantSchema.parse(response);
    console.log("GespeicherT!", newPlant)

  }

  function handleError(errors: any) {
    console.log("ERRORs im Formular", errors);
  }

  // react hook form
  //  formik
  //  TanStack form

  // form.getFieldState("name").invalid

  return <form onSubmit={form.handleSubmit(handleSave, handleError)}>

    <div className={"FormControl"}>
      <label>Name</label>
      <input {...form.register("name")} />
      <ErrorMessage msg={form.formState.errors.name?.message} />
    </div>

    <div className={"FormControl"}>
      <label>Standort</label>
      <select  {...form.register("location")}>
        <option value={""}>Bitte Standort wählen</option>
        <option value={"Wohnzimmer"}>Wohnzimmer</option>
        <option value={"Schlafzimmer"}>Schlafzimmer</option>
        <option value={"Bad"}>Bad</option>
      </select>
      {form.formState.errors.location === undefined ?
        null :
        <p className={"error-message"}>
          {form.formState.errors.location.message}
        </p>
      }
    </div>

    <div className={"FormControl"}>
      <Controller
        control={form.control}
        name={"wateringInterval"}
         // Render Prop Pattern
        render={ field => {
          return  <IntervalSelector
            wateringInterval={field.field.value}
            onWateringIntervalChange={ newWateringInterval => {
              field.field.onChange(newWateringInterval);
            }} />
          }
        }
      />
      <ErrorMessage msg={form.formState.errors.wateringInterval?.message} />

    </div>

    <div className={"FormControl"}>
      <label>Zuletzt gegossen</label>
      <input type={"date"}  {...form.register("lastWatered"
        // {
        // setValueAs(currentValue) {
        //   if (currentValue === "") {
        //     return undefined;
        //   }
        //
        //   return currentValue;
        // }
      // }
      )}/>
      {form.formState.errors.lastWatered === undefined ?
        null :
        <p className={"error-message"}>
          {form.formState.errors.lastWatered.message}
        </p>
      }
    </div>

    <button className={"primary"}>
      Speichern
    </button>
    <button className={"secondary"}
      onClick={() => form.reset()}
    >
      Formular löschen 🧹
    </button>
  </form>
}

type ErrorMessageProps = {
  msg: string | undefined
}
function ErrorMessage( { msg }: ErrorMessageProps) {

  if (msg === undefined) {
    return null;
  }

  return <p className={"error-message"}>{msg}</p>

}

// ...