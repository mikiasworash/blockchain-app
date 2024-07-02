import Image from 'next/image';
import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle, Input } from '../ui/';
import { BNBIcon, BTCIcon, SettingsIcon, SwapIcon } from '@/constants/icons';
import { ChevronRightIcon } from 'lucide-react';

export default function Swap() {
  return (
    <Card className="w-full bg-transparent p-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="uppercase text-white">Swap Tokens</CardTitle>
          <Image src={SettingsIcon} alt="settings icon" width={32} height={32} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5"></div>
          <div className="flex flex-col space-y-1.5"></div>
        </div>
        <div className="flex flex-col items-center gap-6 justify-center">
          <div className="relative flex w-full">
            <div className="flex flex-col md:flex-row gap-2 bg-dark-background px-12 py-2 rounded-l-md justify-between flex-1 border-r border-black">
              <div className="flex-1">
                <Input
                  type="number"
                  placeholder="0.00"
                  className="remove-arrow text-white text-5xl bg-transparent py-8 px-0 border-none outline-none focus-visible:ring-0 focus-visible:border-0 placeholder:text-light font-semibold"
                />
                <p className="text-dark">$0.00</p>
              </div>
              <div className="flex flex-col self-center gap-2">
                <div className="p-2 py-1 flex gap-2 items-center bg-black">
                  <Image src={BTCIcon} alt="btc icon" width={32} height={32} />
                  <div className="flex items-center gap-1">
                    <p className="text-dark text-xl font-medium">BTC</p>
                    <ChevronRightIcon className="w-4 h-4 text-dark" />
                  </div>
                </div>
                <div>
                  <p className="text-light text-sm">
                    Balance: <span className="text-blue-500">24,240</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-[50%] left-[50%] translate-x transform translate-x-[-50%] translate-y-[-50%] bg-black rounded-full w-12 h-12 flex items-center justify-center">
              <Image src={SwapIcon} alt="swap icon" width={32} height={32} />
            </div>
            <div className="flex flex-col md:flex-row gap-2 bg-dark-background px-12 py-2 rounded-r-md justify-between flex-1 border-l border-black">
              <div className="flex-1">
                <Input
                  type="number"
                  placeholder="0.00"
                  className="remove-arrow text-white text-5xl bg-transparent py-8 px-0 border-none outline-none focus-visible:ring-0 focus-visible:border-0 placeholder:text-light font-semibold"
                />
                <p className="text-dark">$0.00</p>
              </div>
              <div className="flex flex-col self-center gap-2">
                <div className="p-2 py-1 flex gap-2 items-center bg-black">
                  <Image src={BNBIcon} alt="btc icon" width={32} height={32} />
                  <div className="flex items-center gap-1">
                    <p className="text-dark text-xl font-medium">BNB</p>
                    <ChevronRightIcon className="w-4 h-4 text-dark" />
                  </div>
                </div>
                <div>
                  <p className="text-light text-sm">
                    Balance: <span className="text-blue-500">63,790</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Button className="uppercase w-60">Swap Tokens</Button>
        </div>
        <CardFooter className="text-sm flex items-center justify-between p-0 pt-5">
          <div className="text-light">
            <p>1 BTC = 32.4039 ETH</p>
            <p className="text-blue-500">Free exchange</p>
          </div>
          <p className="text-dark">Updates in 4s</p>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
