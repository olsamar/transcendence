export enum ErrorType {
  GENERAL,
  USER_NOT_EXIST,
  FRIEND_SEND_REQUEST_FAILED,
  FRIEND_REJECT_REQUEST_FAILED,
  FRIEND_ADD_FRIEND_FAILED,
  FRIEND_REMOVE_FRIEND_FAILED,
}

export function errorMessage(errorType: ErrorType | undefined): string {
  switch (errorType) {
    case ErrorType.GENERAL:
      return "Something went wrong, please retry";
    case ErrorType.USER_NOT_EXIST:
      return "User does not exist.";
    case ErrorType.FRIEND_SEND_REQUEST_FAILED:
      return "Send friend request failed.";
    case ErrorType.FRIEND_REJECT_REQUEST_FAILED:
      return "Unable to reject friend request.";
    case ErrorType.FRIEND_ADD_FRIEND_FAILED:
      return "Add friend failed.";
    case ErrorType.FRIEND_REMOVE_FRIEND_FAILED:
      return "Remove friend failed";
    default:
      return "";
  }
}
