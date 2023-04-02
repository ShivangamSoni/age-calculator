import { ArrowIcon } from "@/assets";

import Input from "@/components/Input";
import Error from "@/components/Error";
import Button from "@/components/Button";
import Output from "@/components/Output";

export default function App() {
    return (
        <main className="font-primary bg-neutral-white-100 text-neutral-black min-h-screen overflow-hidden flex items-center justify-center px-4">
            <h1 className="sr-only">Age Calculator</h1>
            <div className="bg-neutral-white-50 p-8 md:p-12 md:pr-16 rounded-xl rounded-ee-[8rem] w-[min(50rem,100%)]">
                <form className="">
                    <div className="relative pb-14 mb-14 border-b-2 border-neutral-grey-200">
                        <div className="grid grid-cols-3 sm:grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-4">
                            <Input
                                id="day"
                                type="text"
                                placeholder="DD"
                                label="Day"
                                error="Form Error"
                                displayError={false}
                            />
                            <Input
                                id="month"
                                type="text"
                                placeholder="MM"
                                label="Month"
                                error="Form Error"
                                displayError={false}
                            />
                            <Input
                                id="year"
                                type="text"
                                placeholder="YYYY"
                                label="Year"
                                error="Form Error"
                                displayError={false}
                            />
                        </div>
                        <Error>Form Error</Error>

                        <Button
                            className="flex items-center justify-center rounded-full absolute left-1/2 top-full -translate-y-1/2 -translate-x-1/2 md:left-full md:-translate-x-full"
                            type="submit"
                        >
                            <span className="sr-only">Calculate Age</span>
                            <ArrowIcon className="w-8 h-8" />
                        </Button>
                    </div>

                    <div className="grid gap-2">
                        <Output label="years" value="38" htmlFor="year" />
                        <Output label="months" value="--" htmlFor="month" />
                        <Output label="days" value="--" htmlFor="day" />
                    </div>
                </form>
            </div>
        </main>
    );
}
