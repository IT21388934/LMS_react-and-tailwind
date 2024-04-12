export default function Payment() {
  const courseData = {
    price: 49.99,
    title:
      "Full E-Commerce App using MERN Stack under Microservice Architecture",
    description:
      "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.",
  };

  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3 text-left">
              {courseData.title}
            </h3>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src="https://th.bing.com/th/id/OIP.mIMWbiW3KBnfVe-I8MNXdwHaDU?rs=1&pid=ImgDetMain"
                alt="Two each of gray, white, and black shirts laying flat."
                className="h-full w-full object-cover object-center"
              ></img>
            </div>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {courseData.description}
            </p>
          </div>

          <div className="-mt-2 p-10 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 flex justify-center items-center">
            <div className="rounded-2xl h-full bg-grayLight py-10 text-center ring-1 ring-inset ring-gray lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Pay once, own it forever
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    ${courseData.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md  bg-indigo px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-darkBlue ring-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  By completing your purchase you agree to these Terms of
                  Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
