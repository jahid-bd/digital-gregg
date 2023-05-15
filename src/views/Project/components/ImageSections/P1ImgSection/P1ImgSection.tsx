import gsap from 'gsap';
import { useEffect } from 'react';
import BsThreeDotsIcon from 'src/icons/BsThreeDotsIcon';

interface Props {
  newImgUrl: string;
  oldImgUrl: string;
  id: number;
}

const P1ImgSection: React.FC<Props> = ({ newImgUrl, oldImgUrl, id }) => {
  const cls = `_projectImg${id}`;

  useEffect(() => {
    const ProjectScrubTl1 = gsap.timeline({
      scrollTrigger: {
        trigger: `.${cls + 1}`,
        start: 'top 100%',
        scrub: 0.9,
        // markers: true,
      },
    });
    ProjectScrubTl1.to(
      `.${cls}`,
      {
        y: -450,
        duration: 0.8,
      },
      'start'
    );
    // const ProjectScrubTl2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "._projectTrigger2",
    //     start: "`top 100%",
    //     scrub: 0.9,
    //   },
    // });
    // ProjectScrubTl2.to(
    //   "._projectImg2",
    //   {
    //     y: -400,
    //     duration: 0.8,
    //   },
    //   "start"
    // );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className={`lg:block hidden  ${cls + 1}`}>
        <div className={`bg-[#F5F5F5] p-14 lg:p-32`}>
          <div
            className={`lg:flex lg:gap-14   flex items-start justify-between min-h-full ${cls}`}
          >
            <div className="overflow-hidden rounded-[0.35714rem] relative min-h-full w-full">
              <div className="w-full h-[35px] pl-3 text-3xl text-white bg-primary">
                <BsThreeDotsIcon />
              </div>
              <img
                src={newImgUrl}
                alt={newImgUrl}
                height={'100%'}
                width={'100%'}
              />
            </div>
            {oldImgUrl && (
              <div className="overflow-hidden rounded-[0.35714rem] relative w-full">
                <div className="w-full h-[35px] pl-3 text-3xl text-white bg-primary">
                  <BsThreeDotsIcon />
                </div>
                <img
                  src={oldImgUrl}
                  alt={oldImgUrl}
                  height={'100%'}
                  width={'100%'}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Images on Small devices */}
      <div className="lg:hidden block">
        <div className="bg-[#F5F5F5] pt-10 md:px-20 px-10 rounded-md">
          <div className="rounded-md">
            <div className="w-full h-[36px] pl-3 text-3xl text-white bg-primary rounded-tl-md rounded-tr-md">
              <BsThreeDotsIcon />
            </div>
            <img
              src={newImgUrl}
              alt="project_section2_bg"
              height={'100%'}
              width={'100%'}
            />
          </div>
        </div>
        {oldImgUrl && (
          <div className="bg-[#F5F5F5] py-10 mb-10 md:px-20 px-10 rounded-md">
            <div className="rounded-md">
              <div className="w-full py-2 pl-3 text-3xl text-white bg-primary rounded-tl-md rounded-tr-md">
                <BsThreeDotsIcon />
              </div>
              <img
                src={oldImgUrl}
                alt="project_section2_bg"
                height={'100%'}
                width={'100%'}
              />
            </div>
            <img
              src={oldImgUrl}
              alt="project_section2_bg"
              height={'100%'}
              width={'100%'}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default P1ImgSection;
