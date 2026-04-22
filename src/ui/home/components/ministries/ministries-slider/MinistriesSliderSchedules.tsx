import { CalendarIcon } from '@icons/outline';

export default function MinistriesSliderSchedules({ schedules }: Props) {
  return (
    <div className="flex flex-col gap-1 font-semibold text-yellow-100 text-smaller md:text-small">
      {schedules.map((schedule) => {
        return (
          <p key={schedule} className="flex items-center gap-1">
            <CalendarIcon height="16" width="16" className="h-4 w-4 md:h-5 md:w-5 -mt-1" />
            <span>{schedule}</span>
          </p>
        );
      })}
    </div>
  );
}

type Props = {
  schedules: string[];
};
