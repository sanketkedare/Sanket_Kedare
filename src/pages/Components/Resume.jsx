//Resume Component

const Resume = () => 
{
    const RESUME_PDF = "http://localhost:3000/Resume.pdf";
    const downloadResumeUrl =(url)=>
    {
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download','Resume');

        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();


    }


  return (
    <div
      id="resume"
      class="flex justify-center items-center w-[100%] mx-auto py-20
      bg-gradient-to-r from-red-400 via-gray-400 to-yellow-200 shadow-lg"
    >
      <button
        type="button"
        onClick={()=>{downloadResumeUrl(RESUME_PDF)}}
        class="text-black 
               bg-gradient-to-br from-pink-500 to-orange-400 
               hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 
               dark:focus:ring-pink-800 
               font-bold rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-6 p-5"
      >
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
