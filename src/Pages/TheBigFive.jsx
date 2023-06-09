import "../assets/Styles/thebigfive.css";
export default function TheBigFive() {
  return (
    <div className="page-container">
      <div className=" text-white paragraph-container max-w-screen-xl  bg-[#191f2ecb] p-10 rounded-2xl  sm:ml-16 sm:mt-16 ">
        <div className="flex flex-col sm:flex-row">
          <img
            src="./../src/assets/Images/clock.png"
            alt="img"
            className="w-6"
          />
          <p className="ml-2 sm:ml-4">15 Minutes</p>
        </div>
        <br />
        <br />
        <h1 className=" text-5xl font-bold">
          The Big Five: Your Gateway to Greater Discoveries!
        </h1>
        <br />
        <p className=" font-thin tracking-wider w-3/4">
          Before we embark on this thrilling journey to uncover your unique
          career path, we need to get to know you a little better. And what
          better way than through the 'Big Five Personality Assessment'?
          <br />
          <br />
          The Big Five is a well-respected psychological model that helps us
          understand your unique personality traits. No, we're not mind-readers
          (though that would be cool), we simply use science to help you
          discover the best career paths suited to your personality. <br />
          <br />
          This isn't a test, so there are no right or wrong answers. Just be
          honest, because the more truthful you are, the more accurate your
          career matches will be. And don't worry, we value your privacy and
          your responses will be kept confidential. This introspective journey
          will take about 15 minutes of your time. So, grab a snack, settle into
          your favorite chair, and get ready to dive deep into the fascinating
          world of you!
        </p>
        <br />
        <button className="enter bg-[#3d3bfe] hover:bg-white hover:text-black w-full sm:w-96 h-14 rounded-xl border border-gray-900 font-bold tracking-widest shadow-inner shadow-black">
          Enter
        </button>
      </div>
    </div>
  );
}
