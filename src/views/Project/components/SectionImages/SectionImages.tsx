import BsThreeDotsIcon from 'src/icons/BsThreeDotsIcon';

interface Props {
  newImgUrl: string;
  oldImgUrl: string;
}

const SectionImages: React.FC<Props> = ({ newImgUrl, oldImgUrl }) => {
  return (
    <div>
      <div className="lg:block hidden">
        <div className="bg-[#F5F5F5] p-12 lg:p-20 lg:flex lg:gap-14 _projectTrigger2">
          <div className="overflow-hidden rounded-md relative top-52 _projectImg2">
            <div className="w-full py-2 pl-3 text-3xl text-white bg-primary">
              <BsThreeDotsIcon />
            </div>
            <img
              src={newImgUrl}
              alt={newImgUrl}
              height={'100%'}
              width={'100%'}
            />
          </div>
          <div className="rounded-md ovreflow-hidden relative top-52 _projectImg2">
            <div className="hidden w-full py-2 pl-3 text-3xl text-white lg:block bg-primary">
              <BsThreeDotsIcon />
            </div>
            <img src={oldImgUrl} alt="loading image" height={'100%'} width={'100%'} />
          </div>
        </div>
      </div>

      {/* Images on Small devices */}
      <div className="lg:hidden block">
        <div className="bg-[#F5F5F5] pt-10 md:px-20 px-10 rounded-md">
          <div className="rounded-md">
            <div className="w-full py-2 pl-3 text-3xl text-white bg-primary rounded-tl-md rounded-tr-md">
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
        </div>
      </div>
    </div>
  );
};

export default SectionImages;
