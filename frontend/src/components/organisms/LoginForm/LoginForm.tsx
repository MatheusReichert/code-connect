import { useState } from 'react';
import type { FormEvent } from 'react';
import { FormField } from '../../molecules/FormField/FormField';
import { Button } from '../../atoms/Button/Button';
import { Checkbox } from '../../atoms/Checkbox/Checkbox';
import { Link } from '../../atoms/Link/Link';

export interface LoginValues {
  identifier: string;
  password?: string;
  rememberMe?: boolean;
}

interface LoginFormProps {
  onSubmit: (values: LoginValues) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ identifier, password, rememberMe });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-3xl font-bold">Login</h1>
        <p className="text-muted text-lg">Boas-vindas! Faça seu login.</p>
      </div>

      <div className="flex flex-col gap-6">
        <FormField
          label="Email ou usuário"
          id="identifier"
          placeholder="usuario123"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
        />
        <FormField
          label="Senha"
          id="password"
          type="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <Checkbox
          label="Lembrar-me"
          id="rememberMe"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <Link to="/esqueci-senha" className="text-sm font-medium hover:text-white transition-colors">
          Esqueci a senha
        </Link>
      </div>

      <Button type="submit" showArrow>Login</Button>
    </form>
  );
}
