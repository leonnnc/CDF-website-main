import Image from 'next/image';

export function DonationQr({ qrCode, accountOwner }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 rounded-2xl h-40 w-40 md:h-48 md:w-48 overflow-hidden p-2 bg-white">
        <Image
          src={qrCode}
          alt="codigo qr de yape"
          height="192"
          width="192"
          className="h-full w-full"
        />
      </div>
      <p className="font-semibold">{accountOwner}</p>
    </div>
  );
}

type Props = {
  qrCode: string;
  accountOwner: string;
};
