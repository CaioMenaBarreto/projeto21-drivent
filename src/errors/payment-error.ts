import { ApplicationError } from '@/protocols';

export function paymentError(): ApplicationError {
    return {
        name: 'payment required',
        message: 'You need to pay for the ticket.',
    };
}