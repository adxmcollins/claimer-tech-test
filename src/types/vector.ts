export interface ISVG {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
}

export interface IProgressIcon extends ISVG {
  progress: number;
}
