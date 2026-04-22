import { WhyDestination } from '@modules/give/interfaces/give-why.interface';

export function GiveWhyDestinationItem({ item }: Props) {
  const { title, description, icon, color } = item;

  return (
    <div className="flex gap-6 p-4 lg:p-8 border-b md:border-none border-b-primary-200/20 last-of-type:border-none">
      <div
        style={{ background: color }}
        className="grid place-items-center h-12 w-12 lg:h-16 lg:w-16 rounded-full shrink-0"
      >
        {icon}
      </div>
      <div>
        <p className="text-bigger lg:text-h4 mb-3 font-bold">{title}</p>
        <p className="text-small">{description}</p>
      </div>
    </div>
  );
}

type Props = {
  item: WhyDestination;
};
