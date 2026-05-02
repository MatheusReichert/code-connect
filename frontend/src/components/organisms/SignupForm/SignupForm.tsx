import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { FormField } from "../../molecules/FormField/FormField";

export interface SignupValues {
	name: string;
	email: string;
	password?: string;
}

interface SignupFormProps {
	onSubmit: (values: SignupValues) => void;
}

export function SignupForm({ onSubmit }: SignupFormProps) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setError(null);

		if (password !== confirmPassword) {
			setError("As senhas não conferem");
			return;
		}

		onSubmit({ name, email, password });
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
			<div className="flex flex-col gap-2">
				<h1 className="text-white text-3xl font-bold">Cadastro</h1>
				<p className="text-muted text-lg">Crie sua conta no Code Connect.</p>
			</div>

			<div className="flex flex-col gap-5">
				<FormField
					label="Nome"
					id="name"
					placeholder="Digite seu nome completo"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<FormField
					label="Email"
					id="email"
					type="email"
					placeholder="Digite seu melhor email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<FormField
					label="Senha"
					id="password"
					type="password"
					placeholder="Crie uma senha forte"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<FormField
					label="Confirmar senha"
					id="confirmPassword"
					type="password"
					placeholder="Repita sua senha"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					errorMessage={error || undefined}
					required
				/>
			</div>

			<Button type="submit" showArrow>
				Cadastrar
			</Button>
		</form>
	);
}
