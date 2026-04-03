import { Suspense } from "react";
import VideoSubmissionMain from "./video_submission_main";

export default function VideoSubmissionPage() {
  return (
    <Suspense fallback={null}>
      <VideoSubmissionMain />
    </Suspense>
  );
}
