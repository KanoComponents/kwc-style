import { html } from '../template.js';
 
export const checkbox = html`
    <style>
        .input[type="checkbox"] {
            height: 14px;
            margin-right: 14px;
            position: relative;
            width: 14px;
        }
        .input[type="checkbox"]::before,
        .input[type="checkbox"]::after {
            border: 1px solid var(--color-abbey);
            border-radius: 3px;
            color: white;
            cursor: pointer;
            height: 14px;
            left: 0;
            position: absolute;
            top: 0;
            width: 14px;
        }
        .input[type="checkbox"]::before {
            background-color: white;
            content: '';
        }
        .input[type="checkbox"]::after {
            content: url('data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Asvg%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%3Cg%3E%0A%20%20%3Ctitle%3EKano%20Tick%3C/title%3E%0A%20%20%3Cpath%20id%3D%22tick-1%22%20fill%3D%22white%22%20d%3D%22m5.36056%2C11.53785l0%2C0c-0.37266%2C0%20-0.73026%2C-0.14826%20-0.99385%2C-0.41162l-2.98608%2C-2.98634c-0.54882%2C-0.54882%20-0.54882%2C-1.43863%200.00024%2C-1.98746c0.54882%2C-0.54831%201.43863%2C-0.54857%201.9872%2C0.00024l1.99248%2C1.99248l5.27158%2C-5.27158c0.54831%2C-0.54857%201.43889%2C-0.54857%201.9872%2C0c0.54882%2C0.54882%200.54882%2C1.43863%200%2C1.98746l-6.26518%2C6.26518c-0.26361%2C0.26335%20-0.62094%2C0.41162%20-0.9936%2C0.41162l0%2C0.00001l0.00001%2C0.00001z%22/%3E%0A%20%3C/g%3E%0A%3C/svg%3E');
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .input[type="checkbox"]:checked::after {
            background-color: var(--color-abbey);
            opacity: 1;
        }
        .input[type="checkbox"]:focus {
            outline: none;
            border-color: var(--color-kano-orange);
        }
        .input[type="checkbox"] ~ label {
            cursor: pointer;
        }
    </style>
`;
