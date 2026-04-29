// @ts-nocheck
import { Next } from '@/components/home/next';

export function HomePage() {
  return (
    <>
      <Next />
      <iframe
        key="1"
        name="__tcfapiLocator"
        style={{
          display: 'none',
        }}
      />
      <div key="2" id="portal" />
      <next-route-announcer key="3">
        <p
          aria-live="assertive"
          id="__next-route-announcer__"
          role="alert"
          style={{
            border: '0px',
            clip: 'rect(0px,0px,0px,0px)',
            height: '1px',
            margin: '-1px',
            overflow: 'hidden',
            overflowWrap: 'normal',
            padding: '0px',
            position: 'absolute',
            top: '0px',
            whiteSpace: 'nowrap',
            width: '1px',
          }}
        >
          The AI workspace that works for you. | Notion
        </p>
      </next-route-announcer>
      <span
        key="4"
        id="PING_IFRAME_FORM_DETECTION"
        style={{
          display: 'none',
        }}
      />
      <div
        key="5"
        id="_r_0_"
        data-base-ui-portal=""
        data-slot="toast-portal-anchored"
      >
        <div
          tabIndex="-1"
          role="region"
          aria-live="polite"
          aria-atomic="false"
          aria-relevant="additions text"
          aria-label="Notifications"
          data-slot="toast-viewport-anchored"
          className="outline-none"
        />
      </div>
      <div key="6" id="_r_1_" data-base-ui-portal="" data-slot="toast-portal">
        <div
          tabIndex="-1"
          role="region"
          aria-live="polite"
          aria-atomic="false"
          aria-relevant="additions text"
          aria-label="Notifications"
          data-position="bottom-right"
          data-slot="toast-viewport"
          className="fixed z-50 mx-auto flex w-[calc(100%-var(--toast-inset)*2)] max-w-90 [--toast-inset:--spacing(4)] sm:[--toast-inset:--spacing(8)] data-[position*=top]:top-(--toast-inset) data-[position*=bottom]:bottom-(--toast-inset) data-[position*=left]:left-(--toast-inset) data-[position*=right]:right-(--toast-inset) data-[position*=center]:-translate-x-1/2 data-[position*=center]:left-1/2"
        />
      </div>
      <img
        key="8"
        src="data:,"
        height="1"
        width="1"
        fetchpriority="high"
        style={{
          display: 'none',
        }}
        data-airgap-id="19"
      />
      <img
        key="9"
        src="data:,"
        height="1"
        width="1"
        fetchpriority="high"
        style={{
          display: 'none',
        }}
        data-airgap-id="20"
      />
      <img
        key="10"
        id="podscribe-request"
        alt=""
        aria-hidden="true"
        src="data:,"
        style={{
          display: 'none',
        }}
        data-airgap-id="23"
      />
      <div
        key="11"
        id="transcend-consent-manager"
        style={{
          position: 'fixed',
          zIndex: '2147483647',
        }}
      />
    </>
  );
}