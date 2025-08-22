import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface ButtonProps extends 
	Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 
	'onAnimationStart' | 'onDragEnd' | 'onDrag' | 'onDragStart' | 'ref'
	> {
	appearance?: 'primary' | 'ghost';
	children: ReactNode;
	arrow?: 'right' | 'down' | 'none';
}
