//   <div className="hover:bg-gray-400/30 bg-gray-200/75 rounded-lg p-3 mt-2 duration-300">
//     <div className="grid grid-cols-3 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white/90 py-1 pointer-events-none">
//       <p className="text-black/75 text-sm md:text-base">Type</p>
//       {props.poke.types.map((poke) => {
//         return (
//           <p
//             className={`${poke.type.name} rounded-md text-center text-xs py-0.5 capitalize md:text-base`}
//           >
//             {poke.type.name}
//           </p>
//         );
//       })}
//     </div>

//     <div className="grid grid-cols-2 flex items-center justify-center py-1.5 pointer-events-none">
//       <p className="text-black/75 text-sm md:text-base">ID</p>
//       <p className="text-xs md:text-base">{props.poke.id}</p>
//     </div>

//     <div className="bg-white/90 rounded-lg px-2 py-3 border border-black/60 pointer-events-none">
//       <h5 className="text-black/75 text-sm mb-1">Stats</h5>
//       <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 px-1">
//         {props.poke.stats.map((pokemon) => {
//           return (
//             <div className="grid grid-cols-3">
//               <p className="col-span-2 flex items-center capitalize text-black/75 text-xs md:text-sm">
//                 {pokemon.stat.name}:{" "}
//               </p>
//               <span
//                 className={`${pokemon.stat.name} col-span-1 flex items-center justify-center
//           rounded text-xs md:text-base text-center`}
//               >
//                 {pokemon.base_stat}
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   </div>
// {
//   /* <div className="grid grid-cols-2">
// <div className="bg-gray-200/75 hover:bg-gray-400/30 p-3 rounded-lg mt-2 duration-300">
//   <h5 className="-mb-1.5 py-1 text-sm font-medium text-black/75 capitalize pointer-events-none">
//     Abilities
//   </h5>
//   <div className="py-2 px-6 grid gap-y-1 pointer-events-none">
//     {props.poke.abilities.map((pokemon) => {
//       return (
//         <p
//           className="abilities-bg flex justify-center items-center py-0.5 capitalize text-xs sm:text-sm text-black/70
//         w-auto rounded"
//         >
//           {pokemon.ability.name}
//         </p>
//       );
//     })}
//   </div>
// </div>
// </div> */
// }
