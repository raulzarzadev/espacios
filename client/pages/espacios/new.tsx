import FormEspacio from "@comps/Forms/FormEspacio";
import Head from "@comps/Head";

export default function newEspacioPage() {
   return (
     <div className="">
       <Head title="Detalles | Espacio" />
       <div className="max-w-lg mx-auto">
         <FormEspacio formTitle="Nuevo espacio"  />
       </div>
     </div>
   )
}