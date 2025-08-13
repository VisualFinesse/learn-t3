import Link from "next/link";

const mockUrls = [
  "https://pvsln6ejtp.ufs.sh/f/YiXNJa7Ou9ZfsKoHxkmG5gTnedXsfxAEHVUB1YuNKcZk7Omy",
  "https://pvsln6ejtp.ufs.sh/f/YiXNJa7Ou9Zf7mEVkT9JupbdMyfV6m4iLABz1gevsS5ahOkw",
  "https://pvsln6ejtp.ufs.sh/f/YiXNJa7Ou9Zf47JjGzhXQhd9gE6z3bAWl8FJTYwuIR0Uri7f",
  "https://pvsln6ejtp.ufs.sh/f/YiXNJa7Ou9ZftfeoT7wzEFA56arXBun2GZeqOsNbfDPUWSHR",
  "https://pvsln6ejtp.ufs.sh/f/YiXNJa7Ou9Zfh83WbnP4yYm7q39LSr6IoePjaRKvNZD5BbTt",
  "https://pvsln6ejtp.ufs.sh/f/YiXNJa7Ou9ZfkuVCXA30BAXLlKenqOth0ups4P5fzgRw9ZUv",
  "https://pvsln6ejtp.ufs.sh/f/YiXNJa7Ou9ZfSqQPGtCP5tqTSMXiFWkaINd6KC3Hvc7symlx",
  "https://pvsln6ejtp.ufs.sh/f/YiXNJa7Ou9ZfuQaizJ3C3U2Opq4le6NAsx9TI1zDkwrBnghG",
  "https://pvsln6ejtp.ufs.sh/f/YiXNJa7Ou9ZfsyDFXumG5gTnedXsfxAEHVUB1YuNKcZk7Omy",
  "https://pvsln6ejtp.ufs.sh/f/YiXNJa7Ou9Zf8XnmFQzhLdZrqvmSgX1JF2kB4itEH6jl9TI0",
  "https://pvsln6ejtp.ufs.sh/f/YiXNJa7Ou9ZfZmuWtQ5EDFxjpi2bayhB3zTQU09Cwt85NIk4",
  "https://pvsln6ejtp.ufs.sh/f/YiXNJa7Ou9ZfG4QjJLBu4Xx5zpNUrT03W2haodGq7kI1nFsP",
  "https://pvsln6ejtp.ufs.sh/f/YiXNJa7Ou9Zf0XZncZGRvq4aFtWQhIUfCzbn6yord9Blpw1K"
];

const mockImages = mockUrls.map((url, index) => ({ url, index }));

// export default function HomePage() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">

//         <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
//           Hello! <span className="text-[hsl(280,100%,70%)]">Gallery </span> in progress!
//         </h1>
//         <div className="flex content-center flex-wrap gap-4">{
//           mockImages.map((image) => (
//             <div key={image.index} className="w-5xl align">
//             <img src={image.url} alt="image" />
//             </div>
//           ))}
//         </div>
//     </main>
//   );
// }

export default function HomePage() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white scrollbar-hide h-screen overflow-y-auto">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Hello! <span className="text-[hsl(280,100%,70%)]">Gallery </span> in progress!
      </h1>
      {mockImages.map((image) => (
        <section
          key={image.index}
          className="flex min-h-screen items-center justify-center p-8"
        >
          <img
            src={image.url}
            alt="image"
            className="max-h-[80vh] max-w-[80vw] object-contain rounded-lg shadow-lg"
          />
        </section>
      ))}
    </main>
  );
}
