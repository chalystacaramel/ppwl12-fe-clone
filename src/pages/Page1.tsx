// @ts-nocheck
import { Next } from '@/components/home/next';

export default function Page1() {
  return (
    <>
      <Next />
      <iframe
        name="__tcfapiLocator"
        style={{ display: 'none' }}
      />
      <div id="portal" />
      <div id="transcend-consent-manager" style={{ position: 'fixed', zIndex: 2147483647 }} />
    </>
  );
}
