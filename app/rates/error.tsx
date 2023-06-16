'use client';

export default function ErrorWrapper({ error }: { error: Error }) {
  return <div className="error">Ooops! {error.message}</div>;
}
