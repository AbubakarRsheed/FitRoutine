export default function DMCAPage() {
  return (
    <main className="pt-32 pb-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            DMCA Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Last Updated: March 27, 2025
          </p>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Copyright Infringement Notification
              </h2>
              <p>
                FitRoutine respects the intellectual property rights of others and expects its users to do the same.{' '}
                In accordance with the Digital Millennium Copyright Act (&quot;DMCA&quot;), we will respond promptly to claims{' '}
                of copyright infringement that are reported to our designated copyright agent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                How to File a Complaint
              </h2>
              <p>
                If you believe that your copyrighted work has been copied in a way that constitutes copyright{' '}
                infringement and is accessible on this site, please notify our copyright agent with the following information:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>A physical or electronic signature of the copyright owner or person authorized to act on their behalf</li>
                <li>Identification of the copyrighted work claimed to have been infringed</li>
                <li>Identification of the material that is claimed to be infringing and information reasonably sufficient to permit us to locate the material</li>
                <li>Your contact information, including address, telephone number, and email</li>
                <li>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner</li>
                <li>A statement that the information in the notification is accurate and, under penalty of perjury, that you are authorized to act on behalf of the copyright owner</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Contact Information
              </h2>
              <p>
                Please send all DMCA notices to our designated agent:
              </p>
              <div className="mt-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="font-medium">Email: <a href="mailto:dmca@fitroutine.online" className="text-primary hover:underline">dmca@fitroutine.online</a></p>
                <p className="mt-1">Mailing Address: FitRoutine, [Your Address], Pakistan</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Counter-Notification
              </h2>
              <p>
                If you believe that your material was removed or disabled by mistake or misidentification,{' '}
                you may file a counter-notification with us. Upon receipt of a valid counter-notification,{' '}
                we will forward it to the complaining party and restore the material unless we receive notice{' '}
                that a court action has been filed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Repeat Infringers
              </h2>
              <p>
                FitRoutine reserves the right to terminate user accounts and access to the website for users{' '}
                who are repeat infringers of copyrighted material.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}