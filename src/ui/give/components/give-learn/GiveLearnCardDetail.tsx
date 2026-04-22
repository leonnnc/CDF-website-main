import { CalendarIcon, ClockIcon } from '@icons/outline';

export default function GiveLearnCardDetail({ type, value }: Props) {
  return (
    <p className="flex items-center gap-2">
      {type === 'duration' && <ClockIcon height="20" width="20" />}
      {type === 'date' && <CalendarIcon height="20" width="20" />}
      <span>{value}</span>
    </p>
  );
}

type Props = {
  type: 'date' | 'duration';
  value: string;
  className?: string;
};
