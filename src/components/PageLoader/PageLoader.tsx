// Import ClipLoader component from react-spinners library for displaying loading animation
import { BounceLoader } from 'react-spinners';

/**
 * PageLoader component
 *
 * This component renders a full-screen page loader animation using BounceLoader from react-spinners.
 * It utilizes the primary color defined in the Tailwind CSS configuration.
 */
const PageLoader = () => {
    // Define primary color from Tailwind CSS configuration
    const secondaryColor = '#99E1D9';

    return (
        // Render a fixed-positioned flex container covering the entire viewport with a semi-transparent black background
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]">
            {/* Render ClipLoader with primary color and responsive sizes */}
            <BounceLoader color={secondaryColor} size="10vw" />
        </div>
    );
};

export default PageLoader;
