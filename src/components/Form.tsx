// import { FormEvent, useRef, useState } from "react";
// import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// schema-based validation rule
// can custom error messages as well
const schema = z.object({
	name: z.string().min(3, { message: "Name must be at least 3 characters" }),
	age: z
		.number({ invalid_type_error: "Age field is required" })
		.min(18, { message: "Age must be at least 18" }),
});

// no need to define type for each property manually
type FormData = z.infer<typeof schema>;

// define shape of the form for type safety because TS isn't aware of input fields
// after adding it, as typing errors. => autocompletion will work
// interface FormData {
// 	name: string;
// 	age: number;
// }

const Form = () => {
	// useRef to get value of input fields
	// const nameRef = useRef<HTMLInputElement>(null);
	// const ageRef = useRef<HTMLInputElement>(null);
	// const person = { name: "", age: 0 };

	// use state hook to control value of input fields
	// const [person, setPerson] = useState({ name: "", age: "" });

	// use hook from react-hook-form to manage form
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	// const handleSubmit = (event: FormEvent) => {
	// 	event.preventDefault();

	// 	console.log(person);
	// if (nameRef.current) {
	// 	person.name = nameRef.current.value;
	// }
	// if (ageRef.current) {
	// 	person.age = parseInt(ageRef.current.value);
	// }
	// console.log(person);
	// };

	// only call if form is valid
	const onSubmit = (data: FieldValues) => console.log(data);

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input
						// ref={nameRef}
						// onChange={(event) =>
						// 	setPerson({ ...person, name: event.target.value })
						// }
						// value={person.name}

						// since using zod, no need to define validation rule here
						// {...register("name", { required: true, minLength: 3 })}
						{...register("name")}
						id="name"
						type="text"
						className="form-control"
					/>
					{errors.name && (
						<p className="text-danger">{errors.name.message}</p>
					)}
					{/* {errors.name?.type === "minLength" && (
						<p className="text-danger">
							The name field must be at least 3 characters
						</p>
					)} */}
				</div>
				<div className="mb-3">
					<label htmlFor="age" className="form-label">
						Age
					</label>
					<input
						// ref={ageRef}
						// onChange={(event) =>
						// 	setPerson({
						// 		...person,
						// 		age: event.target.value,
						// 	})
						// }
						// value={person.age}
						{...register("age", { valueAsNumber: true })}
						id="age"
						type="number"
						className="form-control"
					/>
					{errors.age && (
						<p className="text-danger">{errors.age.message}</p>
					)}
				</div>
				<button
					disabled={!isValid}
					className="btn btn-primary"
					type="submit"
				>
					Submit
				</button>
			</form>
		</>
	);
};

export default Form;
