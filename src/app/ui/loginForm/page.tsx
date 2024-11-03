import { signup } from '@/actions/auth';
import { Children } from 'react';

export default function Login() {
    return (
        <form action={signup} method="POST">
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}