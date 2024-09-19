import { clients } from "@/constants"
import styles from "@/styles"


const Clients = () => {
  return (
    <section id="clients" className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
          {clients.map((clients)=> (
             <div key={clients.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[100px]`}>
                <img src={clients.logo} alt="Clients.Logo" className="sm:w-[192px] w-[100px] object-contain"/>
             </div> 
          ))}
        </div>
    </section>
  )
}

export default Clients