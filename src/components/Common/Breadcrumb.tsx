import Link from "next/link";

const Breadcrumb = ({ pageName, description }: { pageName: string; description: string }) => {
  return (
    <section className="relative z-10 overflow-hidden pt-28 lg:pt-34 xl:pt-38 pb-16 md:pb-20 lg:pb-28 bg-gray-light dark:bg-gray-dark">
      <div className="container">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 md:w-8/12 lg:w-7/12">
            <div className="mb-8 md:mb-0">
              <h1 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                {pageName}
              </h1>
              <p className="text-base text-body-color dark:text-body-color-dark">
                {description}
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-4/12 lg:w-5/12">
            <div className="flex items-center md:justify-end">
              <ul className="flex items-center">
                <li className="flex items-center">
                  <Link
                    href="/"
                    className="pr-1 text-base font-medium text-body-color hover:text-primary dark:text-body-color-dark"
                  >
                    Home
                  </Link>
                  <span className="mr-2 block text-body-color dark:text-body-color-dark"> / </span>
                </li>
                <li className="text-base font-medium text-primary">{pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;