// import React from 'react'


// import { collection, addDoc, updateDoc, doc, getDoc, getDocs } from 'firebase/firestore/lite';
// import { useEffect, useState } from "react";

// import { db } from "../../../config/googlefirebaseConfig";


// export default function Admin() {
//     const [loading, setLoading] = useState(true)

//     const [visitantesH, setVisitantesH] = useState(0)
//     const [visitantesM, setVisitantesM] = useState(0)

//     const [comprasH, setComprasH] = useState(0)
//     const [comprasM, setComprasM] = useState(0)

//     const comprasCollectionRef = collection(db, "comprasAB")

//     const visitorHCollectionRef = doc(db, 'visitorsAB', 'pagH')
//     const visitorMCollectionRef = doc(db, 'visitorsAB', 'pagM')



//     const getVisitantes = async () => {
//         let visitantesH = await getDoc(visitorHCollectionRef)
//         let visitantesH_tratados = visitantesH.data()
//         let totalVisitantesH = visitantesH_tratados['númeroVisitantes']
//         setVisitantesH(totalVisitantesH)
       

//         let visitantesM = await getDoc(visitorMCollectionRef)
//         let visitantesM_tratados = visitantesM.data()
//         let totalVisitantesM = visitantesM_tratados['númeroVisitantes']
//         setVisitantesM(totalVisitantesM)
//       }


//       const getCompras = async() => {
//         let totalComprasH=0;
//         let totalComprasM=0;
      
//         const data = await getDocs(comprasCollectionRef)
//             data.docs.map((doc) => {
//                 if(doc.data().tipo_pagina === 'PaginaH') {
//                     totalComprasH = totalComprasH+1
//                     setComprasH(totalComprasH)
//                     console.log(totalComprasH)
//                     console.log(comprasH)
        
                    
//                 } else {
//                     totalComprasM = totalComprasM+1
//                     setComprasM(totalComprasM)
//                     console.log(totalComprasM)
//                     console.log(comprasM)
                

                    

//                 }
//             })

//             setLoading(false)

//       }
    
    


//     useEffect(() => {
//         getVisitantes()
//         getCompras()
  
//     }, [])


//   return (
//     <>
//         {loading
//         ? 'Carregando'
//         : 
//         <>
//         <div>
//             {comprasH}
//         </div>
//         <div>
//             {comprasM}
//         </div>
//         </>
//         }
        
//     </>
//   )
// }
