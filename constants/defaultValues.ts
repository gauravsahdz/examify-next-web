import { AiFillCalculator } from "react-icons/ai";
import { BsFillWebcamFill } from "react-icons/bs";
import { CiCircleMinus } from "react-icons/ci";
import {
  FiClock,
  FiList,
  FiLock,
  FiSave,
  FiShuffle,
  FiToggleLeft,
} from "react-icons/fi";
import { MdOutlinePublish } from "react-icons/md";

export const TEST_OPTIONS = [
  { icon: FiLock, label: "Lock Browser", type: "toggle", key: "browserLocked" },
  { icon: BsFillWebcamFill, label: "Webcam", type: "toggle", key: "webCam" },
  {
    icon: FiShuffle,
    label: "Shuffle Questions",
    type: "toggle",
    key: "shuffleQuestions",
  },
  {
    icon: FiList,
    label: "No of Questions per Page",
    type: "number",
    key: "noOfQuestionsPerPage",
  },
  {
    icon: CiCircleMinus,
    label: "Negative Marking",
    type: "toggle",
    key: "negativeMarking",
  },
  {
    icon: AiFillCalculator,
    label: "Enable Calculator",
    type: "toggle",
    key: "calculator",
  },
  { icon: FiSave, label: "Auto-Save Answers", type: "toggle", key: "autoSave" },
  {
    icon: FiToggleLeft,
    label: "Switch between answers",
    type: "toggle",
    key: "switchBetweenAnswers",
  },
  {
    icon: FiClock,
    label: "Grace Time (min)",
    type: "number",
    key: "graceTime",
  },
  {
    icon: MdOutlinePublish,
    label: "Publish Grades after Submission",
    type: "toggle",
    key: "showResult",
  },
];
