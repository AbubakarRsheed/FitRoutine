const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center px-4 py-2 mb-3 mr-3 text-sm text-black bg-gray-light rounded-xs duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-primary"
    >
      {text}
    </a>
  );
};

export default TagButton;