// custom.d.ts
// TypeScript에서 해당 모듈을 찾게 하는 파일
// SVG를 ReactComponent로 사용하기 위한 파일

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
