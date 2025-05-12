import CardList from "@/components/CardList";
import Mini_Navigator from "@/components/mini_comp/Mini_Navigator";
import { AvatarFallback } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { iconData } from "@/constants";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { UserLineChart } from "@/components/UserLineChart";

interface SingleUserProps {
  params: {
    username: Promise<string>;
  };
}

const SingleUser = async ({ params }: SingleUserProps) => {
  const username = await params.username;
  return (
    <div>
      <Mini_Navigator username={username} />
      {/* CONTAIENR */}
      <div className="flex flex-col xl:flex-row gap-8 mt-4">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          <div className="p-4 rounded-lg bg-primary-foreground">
            {/* USER BADGE */}
            <h2 className="text-xl font-semibold">User Badge</h2>

            <div className="flex gap-4 mt-4 flex-wrap">
              {iconData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <HoverCard key={index} openDelay={300} closeDelay={200}>
                    <HoverCardTrigger>
                      <IconComponent
                        size={36}
                        className={`rounded-full border p-2 ${item.color}`}
                      />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <h1 className="mb-2 font-bold">{item.title}</h1>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                );
              })}
            </div>
          </div>

          <div className="p-4 rounded-lg bg-primary-foreground">
            {/* INFORMATION */}
            INFO
          </div>

          <div className="p-4 rounded-lg bg-primary-foreground">
            {/* CARDLIST */}
            <CardList title="Recent Transtion" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6">
          <div className="p-4 rounded-lg bg-primary-foreground space-y-2 ">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src={
                    "http://localhost:3000/_next/image?url=%2Fperson.jpg&w=32&q=75"
                  }
                />
                <AvatarFallback>SR</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">Saim Raza</h1>
            </div>

            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              dolorem ab consequatur incidunt at rem nesciunt quisquam dolor, ut
              sint?
            </p>
          </div>

          <div className="p-4 rounded-lg bg-primary-foreground">
                 <h2 className="text-xl font-semibold">User Activity</h2>
            <UserLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
