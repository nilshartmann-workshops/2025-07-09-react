import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";

const IsoDateOrUndefined = z.string()
  .transform(s => {
    if (s === "") {
      return undefined
    }
    return s;
  }).pipe(z.iso.date().optional())

const PlantFormStateSchema = z.object({
  name: z.string().nonempty(),
  location: z.string().nonempty(),
  // wateringInterval: z.number().min(1),
  lastWatered: IsoDateOrUndefined
})

type PlantFormState = z.infer<typeof PlantFormStateSchema>


export default function PlantForm() {

  const form = useForm({
    resolver: zodResolver(PlantFormStateSchema)
    }
  );

  function handleSave(data: PlantFormState) {
    console.log("DATA im Formular", data);
  }

  function handleError(errors: any) {
    console.log("ERRORs im Formular", errors);
  }

  // react hook form
  //  formik
  //  TanStack form

  return <form onSubmit={form.handleSubmit(handleSave, handleError)}>
    <div className={"FormControl"}>
      <label>Name</label>
      <input {...form.register("name")} />
    </div>

    <div className={"FormControl"}>
      <label>Standort</label>
      <select  {...form.register("location")}>
        <option value={""}>Bitte Standort wählen</option>
        <option value={"Wohnzimmer"}>Wohnzimmer</option>
        <option value={"Schlafzimmer"}>Schlafzimmer</option>
        <option value={"Bad"}>Bad</option>
      </select>
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
    </div>

    <button className={"primary"}>
      Speichern
    </button>


  </form>

}