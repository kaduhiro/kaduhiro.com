interface LoadingProps {
  loading: Boolean;
}

const Loading = ({ loading }: LoadingProps) => {
  return (
    <div
      className={
        'fixed flex justify-center items-cneter w-full h-full bg-black z-50 ' + (loading ? 'block' : 'animate-fade-out')
      }
    >
      <img className="w-32 animate-pulse" src="/logo_small.svg" alt="KD" />
    </div>
  );
};

export default Loading;
