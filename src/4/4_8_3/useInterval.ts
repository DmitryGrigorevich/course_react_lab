import { useEffect } from "react";

export function useInterval(callback: () => void, delay: number) {
    // Тут нужно реализовать хук
		useEffect(() => {
			const id = setInterval(() => {
				callback();
			}, delay);
			
			return () => clearInterval(id);
		},[callback, delay]);
}