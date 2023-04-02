import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { object, string, InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { getAge } from "@/utils/getAge";

import { ArrowIcon } from "@/assets";

import Input from "@/components/Input";
import Error from "@/components/Error";
import Button from "@/components/Button";
import Output from "@/components/Output";

const FormSchema = object({
    day: string()
        .required("This field is required")
        .test(
            "validate-day",
            () => "Must be a valid day",
            (value) => Number(value) >= 1 && Number(value) <= 31,
        )
        .test(
            "validate-length",
            () => "Must be a valid day",
            (value) => Number(value) <= 9 || value.length === 2,
        ),
    month: string()
        .required("This field is required")
        .test(
            "validate-month",
            () => "Must be a valid month",
            (value) => Number(value) >= 1 && Number(value) <= 12,
        )
        .test(
            "validate-length",
            () => "Must be a valid month",
            (value) => Number(value) <= 9 || value.length === 2,
        ),
    year: string()
        .required("This field is required")
        .test(
            "validate-year",
            () => "Must be in the past",
            (value) => {
                return Number(value) <= new Date().getFullYear();
            },
        )
        .test(
            "validate-length",
            () => "Must be a valid year",
            (value) => value.length === 4,
        ),
});
type FormState = InferType<typeof FormSchema>;

export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormState>({
        resolver: yupResolver(FormSchema),
    });
    const [formError, setFormError] = useState("");
    const [age, setAge] = useState<ReturnType<typeof getAge> | null>(null);

    const onSubmit: SubmitHandler<FormState> = ({ year, month, day }) => {
        setFormError("");

        const birthday = new Date(`${year}-${month}-${day}`);
        if (birthday.toString() === "Invalid Date") {
            setFormError("Must be a valid date");
            return;
        }

        const today = new Date();
        if (birthday.getTime() > today.getTime()) {
            setFormError("Must be in the past");
            return;
        }

        setAge(getAge(`${year}-${month}-${day}`));
    };

    return (
        <main className="font-primary bg-neutral-white-100 text-neutral-black min-h-screen overflow-hidden flex items-center justify-center px-4">
            <h1 className="sr-only">Age Calculator</h1>
            <div className="bg-neutral-white-50 p-8 md:p-12 md:pr-16 rounded-xl rounded-ee-[8rem] w-[min(50rem,100%)]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative pb-14 mb-14 border-b-2 border-neutral-grey-200">
                        <div className="grid grid-cols-3 sm:grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-4">
                            <Input
                                id="day"
                                type="text"
                                placeholder="DD"
                                label="Day"
                                error={
                                    formError || (errors.day?.message ?? null)
                                }
                                displayError={!formError}
                                {...register("day", {
                                    onChange() {
                                        setFormError("");
                                    },
                                })}
                            />
                            <Input
                                id="month"
                                type="text"
                                placeholder="MM"
                                label="Month"
                                error={
                                    formError || (errors.month?.message ?? null)
                                }
                                displayError={!formError}
                                {...register("month", {
                                    onChange() {
                                        setFormError("");
                                    },
                                })}
                            />
                            <Input
                                id="year"
                                type="text"
                                placeholder="YYYY"
                                label="Year"
                                error={
                                    formError || (errors.year?.message ?? null)
                                }
                                displayError={!formError}
                                {...register("year", {
                                    onChange() {
                                        setFormError("");
                                    },
                                })}
                            />
                        </div>
                        <Error>{formError}</Error>

                        <Button
                            className="flex items-center justify-center rounded-full absolute left-1/2 top-full -translate-y-1/2 -translate-x-1/2 md:left-full md:-translate-x-full"
                            type="submit"
                        >
                            <span className="sr-only">Calculate Age</span>
                            <ArrowIcon className="w-8 h-8" />
                        </Button>
                    </div>

                    <div className="grid gap-2">
                        <Output
                            label="years"
                            value={age ? age.years.toString() : "--"}
                            htmlFor="year"
                        />
                        <Output
                            label="months"
                            value={age ? age.months.toString() : "--"}
                            htmlFor="month"
                        />
                        <Output
                            label="days"
                            value={age ? age.days.toString() : "--"}
                            htmlFor="day"
                        />
                    </div>
                </form>
            </div>
        </main>
    );
}
