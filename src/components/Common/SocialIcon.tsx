import { Button } from "@material-tailwind/react";

type TSocialProps = {
  icon: string | undefined;
  name: string;
};

type SocialIconProps = {
  socialIcons: TSocialProps[];
};

const SocialIcon = ({ socialIcons }: SocialIconProps) => {
  return (
    <div>
      {socialIcons?.map((icon, index) => {
        return (
          <div className="pt-[10px]" key={index}>
            <Button
              placeholder={""}
              color="white"
              className="flex items-center justify-center gap-4 border py-3 px-5 w-full rounded-lg"
            >
              <img src={icon.icon} alt="" />
              <span className="font-family-lato text-gray-600 capitalize font-semibold text-[14px]">
                {icon.name}
              </span>
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default SocialIcon;
