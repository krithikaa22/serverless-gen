import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddEventInput = {
  description: Scalars['String'];
  eventTimeFrom?: InputMaybe<Scalars['String']>;
  eventTimeTo?: InputMaybe<Scalars['String']>;
  finalistst?: InputMaybe<Scalars['String']>;
  firstplace?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  participation?: InputMaybe<Scalars['String']>;
  pic?: InputMaybe<Scalars['String']>;
  platform?: InputMaybe<Scalars['String']>;
  registrationCloseTime?: InputMaybe<Scalars['String']>;
  registrationOpenTime?: InputMaybe<Scalars['String']>;
  registrationType?: InputMaybe<RegistraionType>;
  registrationfee?: InputMaybe<Scalars['String']>;
  requirements?: InputMaybe<Scalars['String']>;
  secondplace?: InputMaybe<Scalars['String']>;
  teamSize?: InputMaybe<Scalars['Float']>;
  thirdplace?: InputMaybe<Scalars['String']>;
  vertical: Scalars['String'];
};

export type AddTimingsInput = {
  name: Scalars['String'];
  time: Scalars['String'];
};

export type BlitzChess = {
  id: Scalars['ID'];
  isPaid: Scalars['Boolean'];
  orderId: Scalars['String'];
  payementId?: Maybe<Scalars['String']>;
  paymentSignature?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user: User;
  username: Scalars['String'];
};

export type CapturePaymentChessInput = {
  orderId: Scalars['String'];
  payementId: Scalars['String'];
  paymentSignature: Scalars['String'];
};

export type CreateEventFaqInput = {
  answer: Scalars['String'];
  question: Scalars['String'];
};

export type CreateTeamInput = {
  eventID: Scalars['String'];
  members?: InputMaybe<Array<Scalars['String']>>;
  name: Scalars['String'];
};

export type CreateUserInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  college: Scalars['String'];
  department: Scalars['String'];
  email: Scalars['String'];
  mobile: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  state: Scalars['String'];
};

export type EditEventFaqInput = {
  answer?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<Scalars['String']>;
};

export type EditEventInput = {
  description: Scalars['String'];
  eventTimeFrom?: InputMaybe<Scalars['String']>;
  eventTimeTo?: InputMaybe<Scalars['String']>;
  finalistst?: InputMaybe<Scalars['String']>;
  firstplace?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  participation?: InputMaybe<Scalars['String']>;
  pic?: InputMaybe<Scalars['String']>;
  platform?: InputMaybe<Scalars['String']>;
  registrationCloseTime?: InputMaybe<Scalars['String']>;
  registrationOpenTime?: InputMaybe<Scalars['String']>;
  registrationType?: InputMaybe<RegistraionType>;
  registrationfee?: InputMaybe<Scalars['String']>;
  requirements?: InputMaybe<Scalars['String']>;
  secondplace?: InputMaybe<Scalars['String']>;
  teamSize?: InputMaybe<Scalars['Float']>;
  thirdplace?: InputMaybe<Scalars['String']>;
  vertical: Scalars['String'];
};

export type EditProfileInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  college: Scalars['String'];
  department: Scalars['String'];
  email: Scalars['String'];
  mobile: Scalars['String'];
  name: Scalars['String'];
  state: Scalars['String'];
};

export type Event = {
  description: Scalars['String'];
  earlybidoffer?: Maybe<Scalars['String']>;
  eventTimeFrom?: Maybe<Scalars['String']>;
  eventTimeTo?: Maybe<Scalars['String']>;
  eventtimings: Array<Timeline>;
  faqs: Array<EventFaq>;
  finalistst?: Maybe<Scalars['String']>;
  firstplace?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRegistered: Scalars['Boolean'];
  name: Scalars['String'];
  participation?: Maybe<Scalars['String']>;
  pic?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  recordingUserCount: Scalars['Float'];
  recordingUsers: Array<User>;
  registeredTeam: Array<Team>;
  registeredTeamCount: Scalars['Float'];
  registeredUser: Array<User>;
  registeredUserCount: Scalars['Float'];
  registrationCloseTime?: Maybe<Scalars['String']>;
  registrationOpenTime?: Maybe<Scalars['String']>;
  registrationType: Scalars['String'];
  registrationfee?: Maybe<Scalars['String']>;
  requirements?: Maybe<Scalars['String']>;
  secondplace?: Maybe<Scalars['String']>;
  teamSize: Scalars['Float'];
  thirdplace?: Maybe<Scalars['String']>;
  vertical: Scalars['String'];
  yourTeam?: Maybe<Team>;
};

export type EventFaq = {
  answer: Scalars['String'];
  id: Scalars['ID'];
  question: Scalars['String'];
  updatedOn: Scalars['String'];
};

export type EventPay = {
  amount: Scalars['Float'];
  event: Event;
  id: Scalars['String'];
  isPaid: Scalars['Boolean'];
  orderId: Scalars['String'];
  payementId?: Maybe<Scalars['String']>;
  paymentSignature?: Maybe<Scalars['String']>;
  recording: Event;
  recordingUser: User;
  referralcode?: Maybe<Scalars['String']>;
  user: User;
};

export type GetEventsOutput = {
  count: Scalars['Float'];
  events: Array<Event>;
};

export type GetUsersFilter = {
  city?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  school?: InputMaybe<Scalars['String']>;
};

export type GetUsersOutput = {
  count: Scalars['Float'];
  users: Array<User>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  ComboOffer: RegisterOutput;
  ComboupdateEventPay: Scalars['Boolean'];
  addEvent: Event;
  addTimings: Scalars['Boolean'];
  capturePaymentChess: Scalars['Boolean'];
  createEventFAQ: Scalars['Boolean'];
  createTeamAndRegister: Scalars['Boolean'];
  createUser: Scalars['Boolean'];
  deleteEvent: Scalars['Boolean'];
  deleteEventFAQ: Scalars['Boolean'];
  deleteTimings: Scalars['Boolean'];
  earlybidoffer: Scalars['Boolean'];
  editEvent: Scalars['Boolean'];
  editEventFAQ: Scalars['Boolean'];
  editProfile?: Maybe<Scalars['Boolean']>;
  getChessDetails: Scalars['Boolean'];
  getPasswordOTP: Scalars['Boolean'];
  leaveTeam: Scalars['Boolean'];
  login?: Maybe<User>;
  logoutUser: Scalars['Boolean'];
  register: RegisterOutput;
  registerChess: BlitzChess;
  registerRecording: RegisterOutput;
  resendVerificationMail: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  updateEventPay: Scalars['Boolean'];
  updateRecordingPay: Scalars['Boolean'];
  updateReferral: Scalars['Boolean'];
  verifyUser: Scalars['Boolean'];
};


export type MutationComboOfferArgs = {
  TShirtsDetails?: InputMaybe<TShirtsDetails>;
  combo: Scalars['String'];
  referral?: InputMaybe<Scalars['String']>;
  workshopsIDs?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationComboupdateEventPayArgs = {
  data: UpdateEventPayInput;
  referral?: InputMaybe<Scalars['String']>;
};


export type MutationAddEventArgs = {
  data: AddEventInput;
};


export type MutationAddTimingsArgs = {
  data: AddTimingsInput;
  id: Scalars['String'];
};


export type MutationCapturePaymentChessArgs = {
  Input: CapturePaymentChessInput;
};


export type MutationCreateEventFaqArgs = {
  EventID: Scalars['String'];
  data: CreateEventFaqInput;
};


export type MutationCreateTeamAndRegisterArgs = {
  data: CreateTeamInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDeleteEventArgs = {
  id: Scalars['String'];
};


export type MutationDeleteEventFaqArgs = {
  EventFAQID: Scalars['String'];
};


export type MutationDeleteTimingsArgs = {
  id: Scalars['String'];
};


export type MutationEarlybidofferArgs = {
  amount: Scalars['String'];
  eventID: Scalars['String'];
};


export type MutationEditEventArgs = {
  data: EditEventInput;
  eventID: Scalars['String'];
};


export type MutationEditEventFaqArgs = {
  EventFAQID: Scalars['String'];
  data: EditEventFaqInput;
};


export type MutationEditProfileArgs = {
  data: EditProfileInput;
};


export type MutationGetPasswordOtpArgs = {
  email: Scalars['String'];
};


export type MutationLeaveTeamArgs = {
  data: Scalars['String'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  EventID: Scalars['String'];
  referral?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterChessArgs = {
  data: RegisterBlitzChessInput;
};


export type MutationRegisterRecordingArgs = {
  TShirtsDetails?: InputMaybe<TShirtsDetails>;
  offerType: Scalars['String'];
  workshopsIDs: Array<Scalars['String']>;
};


export type MutationResendVerificationMailArgs = {
  data: RequestForgotPassInput;
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationUpdateEventPayArgs = {
  EventId: Scalars['String'];
  data: UpdateEventPayInput;
  referral?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateRecordingPayArgs = {
  data: UpdateEventPayInput;
};


export type MutationUpdateReferralArgs = {
  referralcode: Scalars['String'];
};


export type MutationVerifyUserArgs = {
  otp: Scalars['String'];
};

export type Query = {
  TShirtDetailsCSV: Scalars['String'];
  exportCSV: Scalars['String'];
  getAllRecordingUsersCount: Scalars['Float'];
  getChessDetails: Array<BlitzChess>;
  getChessDetailsCSV: Scalars['String'];
  getEvent: Event;
  getEvents: GetEventsOutput;
  getPaidUsersCount: Scalars['Float'];
  getRecordingUsersCount: Scalars['Float'];
  getUsers?: Maybe<GetUsersOutput>;
  getUsersCount: Scalars['Float'];
  getUsersDataCSV: Scalars['String'];
  me?: Maybe<User>;
  recordingUsersCSV: Scalars['String'];
};


export type QueryExportCsvArgs = {
  EventID: Scalars['String'];
};


export type QueryGetEventArgs = {
  EventID: Scalars['String'];
};


export type QueryGetEventsArgs = {
  filter?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryGetUsersArgs = {
  filter?: InputMaybe<GetUsersFilter>;
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryRecordingUsersCsvArgs = {
  EventID: Scalars['String'];
};

export type RegisterOutput = {
  eventPay?: Maybe<EventPay>;
  registered?: Maybe<Scalars['Boolean']>;
};

export enum RegistraionType {
  Individual = 'INDIVIDUAL',
  None = 'NONE',
  Team = 'TEAM'
}

export type RequestForgotPassInput = {
  email: Scalars['String'];
};

export type ResetPasswordInput = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  otp: Scalars['String'];
};

export type TShirtsDetails = {
  address: Scalars['String'];
  city: Scalars['String'];
  pincode: Scalars['String'];
  shirt: Scalars['String'];
  size: Scalars['String'];
  state: Scalars['String'];
};

export type Team = {
  event: Event;
  id: Scalars['ID'];
  members: Array<User>;
  name: Scalars['String'];
};

export type Timeline = {
  id: Scalars['ID'];
  name: Scalars['String'];
  time: Scalars['String'];
};

export type UpdateEventPayInput = {
  orderId: Scalars['String'];
  payementId: Scalars['String'];
  paymentSignature: Scalars['String'];
};

export type User = {
  address: Scalars['String'];
  city: Scalars['String'];
  college: Scalars['String'];
  department: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  isUsedReferral: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  mobile: Scalars['String'];
  name: Scalars['String'];
  passwordOTP?: Maybe<Scalars['String']>;
  referralcode?: Maybe<Scalars['String']>;
  registeredEvents: Array<Event>;
  role: UserRole;
  shaastraID: Scalars['String'];
  state: Scalars['String'];
  verificationOTP: Scalars['String'];
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type RegisterBlitzChessInput = {
  rating: Scalars['String'];
  title: Scalars['String'];
  username: Scalars['String'];
};

export type CreateUserMutationVariables = Exact<{
  CreateUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { createUser: boolean };

export type VerifyUserMutationVariables = Exact<{
  otp: Scalars['String'];
}>;


export type VerifyUserMutation = { verifyUser: boolean };

export type LoginMutationVariables = Exact<{
  LoginInput: LoginInput;
}>;


export type LoginMutation = { login?: { id: string, role: UserRole, isVerified: boolean } | null | undefined };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { logoutUser: boolean };

export type ResendVerificationMailMutationVariables = Exact<{
  requestForgotPassInput: RequestForgotPassInput;
}>;


export type ResendVerificationMailMutation = { resendVerificationMail: boolean };

export type ResetPasswordMutationVariables = Exact<{
  resetPasswordInput: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { resetPassword: boolean };

export type RegisterMutationVariables = Exact<{
  EventID: Scalars['String'];
  referral?: InputMaybe<Scalars['String']>;
}>;


export type RegisterMutation = { register: { registered?: boolean | null | undefined, eventPay?: { orderId: string, amount: number, user: { name: string, email: string, mobile: string, address: string }, event: { id: string, name: string } } | null | undefined } };

export type ComboOfferMutationVariables = Exact<{
  combo: Scalars['String'];
  workshopsIDs?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  TShirtsDetails?: InputMaybe<TShirtsDetails>;
  referral?: InputMaybe<Scalars['String']>;
}>;


export type ComboOfferMutation = { ComboOffer: { eventPay?: { orderId: string, amount: number, user: { name: string, email: string, mobile: string, address: string } } | null | undefined } };

export type RegisterRecordingMutationVariables = Exact<{
  offerType: Scalars['String'];
  workshopsIDs: Array<Scalars['String']> | Scalars['String'];
  TShirtsDetails?: InputMaybe<TShirtsDetails>;
}>;


export type RegisterRecordingMutation = { registerRecording: { eventPay?: { orderId: string, amount: number, user: { name: string, email: string, mobile: string, address: string } } | null | undefined } };

export type UpdateEventPayMutationVariables = Exact<{
  eventId: Scalars['String'];
  data: UpdateEventPayInput;
  referral?: InputMaybe<Scalars['String']>;
}>;


export type UpdateEventPayMutation = { updateEventPay: boolean };

export type ComboupdateEventPayMutationVariables = Exact<{
  data: UpdateEventPayInput;
  referral?: InputMaybe<Scalars['String']>;
}>;


export type ComboupdateEventPayMutation = { ComboupdateEventPay: boolean };

export type UpdateRecordingPayMutationVariables = Exact<{
  data: UpdateEventPayInput;
}>;


export type UpdateRecordingPayMutation = { updateRecordingPay: boolean };

export type CreateTeamandRegisterMutationVariables = Exact<{
  createTeamAndRegisterData: CreateTeamInput;
}>;


export type CreateTeamandRegisterMutation = { createTeamAndRegister: boolean };

export type GetPasswordOtpMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetPasswordOtpMutation = { getPasswordOTP: boolean };

export type UpdateReferralMutationVariables = Exact<{
  referralcode: Scalars['String'];
}>;


export type UpdateReferralMutation = { updateReferral: boolean };

export type AddEventMutationVariables = Exact<{
  data: AddEventInput;
}>;


export type AddEventMutation = { addEvent: { name: string, id: string } };

export type EditEventMutationVariables = Exact<{
  data: EditEventInput;
  id: Scalars['String'];
}>;


export type EditEventMutation = { editEvent: boolean };

export type DeleteEventMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteEventMutation = { deleteEvent: boolean };

export type EditProfileMutationVariables = Exact<{
  data: EditProfileInput;
}>;


export type EditProfileMutation = { editProfile?: boolean | null | undefined };

export type CreateEventFaqMutationVariables = Exact<{
  data: CreateEventFaqInput;
  id: Scalars['String'];
}>;


export type CreateEventFaqMutation = { createEventFAQ: boolean };

export type EditEventFaqMutationVariables = Exact<{
  data: EditEventFaqInput;
  id: Scalars['String'];
}>;


export type EditEventFaqMutation = { editEventFAQ: boolean };

export type DeleteEventFaqMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteEventFaqMutation = { deleteEventFAQ: boolean };

export type LeaveTeamMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type LeaveTeamMutation = { leaveTeam: boolean };

export type AddTimingsMutationVariables = Exact<{
  id: Scalars['String'];
  data: AddTimingsInput;
}>;


export type AddTimingsMutation = { addTimings: boolean };

export type DeleteTimingsMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTimingsMutation = { deleteTimings: boolean };

export type EarlybidofferMutationVariables = Exact<{
  id: Scalars['String'];
  amount: Scalars['String'];
}>;


export type EarlybidofferMutation = { earlybidoffer: boolean };

export type RegisterChessMutationVariables = Exact<{
  data: RegisterBlitzChessInput;
}>;


export type RegisterChessMutation = { registerChess: { orderId: string } };

export type CapturePaymentChessMutationVariables = Exact<{
  input: CapturePaymentChessInput;
}>;


export type CapturePaymentChessMutation = { capturePaymentChess: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: { id: string, name: string, shaastraID: string, email: string, mobile: string, college: string, department: string, address: string, city: string, state: string, registeredEvents: Array<{ id: string, name: string, pic?: string | null | undefined, eventTimeFrom?: string | null | undefined, eventTimeTo?: string | null | undefined, registrationType: string, yourTeam?: { id: string, name: string, members: Array<{ name: string, email: string }> } | null | undefined }> } | null | undefined };

export type GetUsersQueryVariables = Exact<{
  filter: GetUsersFilter;
}>;


export type GetUsersQuery = { getUsers?: { count: number, users: Array<{ name: string, id: string, shaastraID: string, email: string, role: UserRole, isVerified: boolean, verificationOTP: string, registeredEvents: Array<{ id: string, name: string, teamSize: number, vertical: string }> }> } | null | undefined };

export type GetEventsQueryVariables = Exact<{
  filter: Scalars['String'];
}>;


export type GetEventsQuery = { getEvents: { events: Array<{ id: string, name: string, pic?: string | null | undefined, vertical: string, description: string, requirements?: string | null | undefined, platform?: string | null | undefined, firstplace?: string | null | undefined, secondplace?: string | null | undefined, thirdplace?: string | null | undefined, participation?: string | null | undefined, registrationOpenTime?: string | null | undefined, registrationCloseTime?: string | null | undefined, eventTimeFrom?: string | null | undefined, eventTimeTo?: string | null | undefined, registrationType: string, teamSize: number, registrationfee?: string | null | undefined }> } };

export type GetEventQueryVariables = Exact<{
  EventID: Scalars['String'];
}>;


export type GetEventQuery = { getEvent: { id: string, name: string, vertical: string, description: string, requirements?: string | null | undefined, pic?: string | null | undefined, registrationfee?: string | null | undefined, platform?: string | null | undefined, firstplace?: string | null | undefined, secondplace?: string | null | undefined, thirdplace?: string | null | undefined, participation?: string | null | undefined, registrationOpenTime?: string | null | undefined, registrationCloseTime?: string | null | undefined, eventTimeFrom?: string | null | undefined, eventTimeTo?: string | null | undefined, registrationType: string, teamSize: number, earlybidoffer?: string | null | undefined, registeredUserCount: number, registeredTeamCount: number, recordingUserCount: number, faqs: Array<{ id: string, answer: string, question: string }>, eventtimings: Array<{ id: string, name: string, time: string }> } };

export type GetUsersDataCsvQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersDataCsvQuery = { getUsersDataCSV: string };

export type ExportCsvQueryVariables = Exact<{
  EventID: Scalars['String'];
}>;


export type ExportCsvQuery = { exportCSV: string };

export type GetChessDetailsCsvQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChessDetailsCsvQuery = { getChessDetailsCSV: string };

export type TShirtDetailsCsvQueryVariables = Exact<{ [key: string]: never; }>;


export type TShirtDetailsCsvQuery = { TShirtDetailsCSV: string };

export type RecordingUsersCsvQueryVariables = Exact<{
  EventID: Scalars['String'];
}>;


export type RecordingUsersCsvQuery = { recordingUsersCSV: string };

export type GetPaidUsersCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPaidUsersCountQuery = { getPaidUsersCount: number };

export type GetAllRecordingUsersCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRecordingUsersCountQuery = { getAllRecordingUsersCount: number };


export const CreateUserDocument = gql`
    mutation createUser($CreateUserInput: CreateUserInput!) {
  createUser(data: $CreateUserInput)
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      CreateUserInput: // value for 'CreateUserInput'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const VerifyUserDocument = gql`
    mutation verifyUser($otp: String!) {
  verifyUser(otp: $otp)
}
    `;
export type VerifyUserMutationFn = ApolloReactCommon.MutationFunction<VerifyUserMutation, VerifyUserMutationVariables>;

/**
 * __useVerifyUserMutation__
 *
 * To run a mutation, you first call `useVerifyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUserMutation, { data, loading, error }] = useVerifyUserMutation({
 *   variables: {
 *      otp: // value for 'otp'
 *   },
 * });
 */
export function useVerifyUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VerifyUserMutation, VerifyUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<VerifyUserMutation, VerifyUserMutationVariables>(VerifyUserDocument, options);
      }
export type VerifyUserMutationHookResult = ReturnType<typeof useVerifyUserMutation>;
export type VerifyUserMutationResult = ApolloReactCommon.MutationResult<VerifyUserMutation>;
export type VerifyUserMutationOptions = ApolloReactCommon.BaseMutationOptions<VerifyUserMutation, VerifyUserMutationVariables>;
export const LoginDocument = gql`
    mutation login($LoginInput: LoginInput!) {
  login(data: $LoginInput) {
    id
    role
    isVerified
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      LoginInput: // value for 'LoginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutUserDocument = gql`
    mutation logoutUser {
  logoutUser
}
    `;
export type LogoutUserMutationFn = ApolloReactCommon.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = ApolloReactCommon.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const ResendVerificationMailDocument = gql`
    mutation resendVerificationMail($requestForgotPassInput: RequestForgotPassInput!) {
  resendVerificationMail(data: $requestForgotPassInput)
}
    `;
export type ResendVerificationMailMutationFn = ApolloReactCommon.MutationFunction<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>;

/**
 * __useResendVerificationMailMutation__
 *
 * To run a mutation, you first call `useResendVerificationMailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendVerificationMailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendVerificationMailMutation, { data, loading, error }] = useResendVerificationMailMutation({
 *   variables: {
 *      requestForgotPassInput: // value for 'requestForgotPassInput'
 *   },
 * });
 */
export function useResendVerificationMailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>(ResendVerificationMailDocument, options);
      }
export type ResendVerificationMailMutationHookResult = ReturnType<typeof useResendVerificationMailMutation>;
export type ResendVerificationMailMutationResult = ApolloReactCommon.MutationResult<ResendVerificationMailMutation>;
export type ResendVerificationMailMutationOptions = ApolloReactCommon.BaseMutationOptions<ResendVerificationMailMutation, ResendVerificationMailMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($resetPasswordInput: ResetPasswordInput!) {
  resetPassword(data: $resetPasswordInput)
}
    `;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      resetPasswordInput: // value for 'resetPasswordInput'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const RegisterDocument = gql`
    mutation register($EventID: String!, $referral: String) {
  register(EventID: $EventID, referral: $referral) {
    registered
    eventPay {
      orderId
      amount
      user {
        name
        email
        mobile
        address
      }
      event {
        id
        name
      }
    }
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      EventID: // value for 'EventID'
 *      referral: // value for 'referral'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ComboOfferDocument = gql`
    mutation ComboOffer($combo: String!, $workshopsIDs: [String!], $TShirtsDetails: TShirtsDetails, $referral: String) {
  ComboOffer(
    combo: $combo
    TShirtsDetails: $TShirtsDetails
    workshopsIDs: $workshopsIDs
    referral: $referral
  ) {
    eventPay {
      orderId
      amount
      user {
        name
        email
        mobile
        address
      }
    }
  }
}
    `;
export type ComboOfferMutationFn = ApolloReactCommon.MutationFunction<ComboOfferMutation, ComboOfferMutationVariables>;

/**
 * __useComboOfferMutation__
 *
 * To run a mutation, you first call `useComboOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useComboOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [comboOfferMutation, { data, loading, error }] = useComboOfferMutation({
 *   variables: {
 *      combo: // value for 'combo'
 *      workshopsIDs: // value for 'workshopsIDs'
 *      TShirtsDetails: // value for 'TShirtsDetails'
 *      referral: // value for 'referral'
 *   },
 * });
 */
export function useComboOfferMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ComboOfferMutation, ComboOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ComboOfferMutation, ComboOfferMutationVariables>(ComboOfferDocument, options);
      }
export type ComboOfferMutationHookResult = ReturnType<typeof useComboOfferMutation>;
export type ComboOfferMutationResult = ApolloReactCommon.MutationResult<ComboOfferMutation>;
export type ComboOfferMutationOptions = ApolloReactCommon.BaseMutationOptions<ComboOfferMutation, ComboOfferMutationVariables>;
export const RegisterRecordingDocument = gql`
    mutation RegisterRecording($offerType: String!, $workshopsIDs: [String!]!, $TShirtsDetails: TShirtsDetails) {
  registerRecording(
    offerType: $offerType
    workshopsIDs: $workshopsIDs
    TShirtsDetails: $TShirtsDetails
  ) {
    eventPay {
      orderId
      amount
      user {
        name
        email
        mobile
        address
      }
    }
  }
}
    `;
export type RegisterRecordingMutationFn = ApolloReactCommon.MutationFunction<RegisterRecordingMutation, RegisterRecordingMutationVariables>;

/**
 * __useRegisterRecordingMutation__
 *
 * To run a mutation, you first call `useRegisterRecordingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterRecordingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerRecordingMutation, { data, loading, error }] = useRegisterRecordingMutation({
 *   variables: {
 *      offerType: // value for 'offerType'
 *      workshopsIDs: // value for 'workshopsIDs'
 *      TShirtsDetails: // value for 'TShirtsDetails'
 *   },
 * });
 */
export function useRegisterRecordingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterRecordingMutation, RegisterRecordingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RegisterRecordingMutation, RegisterRecordingMutationVariables>(RegisterRecordingDocument, options);
      }
export type RegisterRecordingMutationHookResult = ReturnType<typeof useRegisterRecordingMutation>;
export type RegisterRecordingMutationResult = ApolloReactCommon.MutationResult<RegisterRecordingMutation>;
export type RegisterRecordingMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterRecordingMutation, RegisterRecordingMutationVariables>;
export const UpdateEventPayDocument = gql`
    mutation updateEventPay($eventId: String!, $data: UpdateEventPayInput!, $referral: String) {
  updateEventPay(EventId: $eventId, data: $data, referral: $referral)
}
    `;
export type UpdateEventPayMutationFn = ApolloReactCommon.MutationFunction<UpdateEventPayMutation, UpdateEventPayMutationVariables>;

/**
 * __useUpdateEventPayMutation__
 *
 * To run a mutation, you first call `useUpdateEventPayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventPayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventPayMutation, { data, loading, error }] = useUpdateEventPayMutation({
 *   variables: {
 *      eventId: // value for 'eventId'
 *      data: // value for 'data'
 *      referral: // value for 'referral'
 *   },
 * });
 */
export function useUpdateEventPayMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateEventPayMutation, UpdateEventPayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateEventPayMutation, UpdateEventPayMutationVariables>(UpdateEventPayDocument, options);
      }
export type UpdateEventPayMutationHookResult = ReturnType<typeof useUpdateEventPayMutation>;
export type UpdateEventPayMutationResult = ApolloReactCommon.MutationResult<UpdateEventPayMutation>;
export type UpdateEventPayMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateEventPayMutation, UpdateEventPayMutationVariables>;
export const ComboupdateEventPayDocument = gql`
    mutation ComboupdateEventPay($data: UpdateEventPayInput!, $referral: String) {
  ComboupdateEventPay(data: $data, referral: $referral)
}
    `;
export type ComboupdateEventPayMutationFn = ApolloReactCommon.MutationFunction<ComboupdateEventPayMutation, ComboupdateEventPayMutationVariables>;

/**
 * __useComboupdateEventPayMutation__
 *
 * To run a mutation, you first call `useComboupdateEventPayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useComboupdateEventPayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [comboupdateEventPayMutation, { data, loading, error }] = useComboupdateEventPayMutation({
 *   variables: {
 *      data: // value for 'data'
 *      referral: // value for 'referral'
 *   },
 * });
 */
export function useComboupdateEventPayMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ComboupdateEventPayMutation, ComboupdateEventPayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ComboupdateEventPayMutation, ComboupdateEventPayMutationVariables>(ComboupdateEventPayDocument, options);
      }
export type ComboupdateEventPayMutationHookResult = ReturnType<typeof useComboupdateEventPayMutation>;
export type ComboupdateEventPayMutationResult = ApolloReactCommon.MutationResult<ComboupdateEventPayMutation>;
export type ComboupdateEventPayMutationOptions = ApolloReactCommon.BaseMutationOptions<ComboupdateEventPayMutation, ComboupdateEventPayMutationVariables>;
export const UpdateRecordingPayDocument = gql`
    mutation UpdateRecordingPay($data: UpdateEventPayInput!) {
  updateRecordingPay(data: $data)
}
    `;
export type UpdateRecordingPayMutationFn = ApolloReactCommon.MutationFunction<UpdateRecordingPayMutation, UpdateRecordingPayMutationVariables>;

/**
 * __useUpdateRecordingPayMutation__
 *
 * To run a mutation, you first call `useUpdateRecordingPayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRecordingPayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRecordingPayMutation, { data, loading, error }] = useUpdateRecordingPayMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateRecordingPayMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateRecordingPayMutation, UpdateRecordingPayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateRecordingPayMutation, UpdateRecordingPayMutationVariables>(UpdateRecordingPayDocument, options);
      }
export type UpdateRecordingPayMutationHookResult = ReturnType<typeof useUpdateRecordingPayMutation>;
export type UpdateRecordingPayMutationResult = ApolloReactCommon.MutationResult<UpdateRecordingPayMutation>;
export type UpdateRecordingPayMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateRecordingPayMutation, UpdateRecordingPayMutationVariables>;
export const CreateTeamandRegisterDocument = gql`
    mutation createTeamandRegister($createTeamAndRegisterData: CreateTeamInput!) {
  createTeamAndRegister(data: $createTeamAndRegisterData)
}
    `;
export type CreateTeamandRegisterMutationFn = ApolloReactCommon.MutationFunction<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>;

/**
 * __useCreateTeamandRegisterMutation__
 *
 * To run a mutation, you first call `useCreateTeamandRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeamandRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeamandRegisterMutation, { data, loading, error }] = useCreateTeamandRegisterMutation({
 *   variables: {
 *      createTeamAndRegisterData: // value for 'createTeamAndRegisterData'
 *   },
 * });
 */
export function useCreateTeamandRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>(CreateTeamandRegisterDocument, options);
      }
export type CreateTeamandRegisterMutationHookResult = ReturnType<typeof useCreateTeamandRegisterMutation>;
export type CreateTeamandRegisterMutationResult = ApolloReactCommon.MutationResult<CreateTeamandRegisterMutation>;
export type CreateTeamandRegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTeamandRegisterMutation, CreateTeamandRegisterMutationVariables>;
export const GetPasswordOtpDocument = gql`
    mutation getPasswordOTP($email: String!) {
  getPasswordOTP(email: $email)
}
    `;
export type GetPasswordOtpMutationFn = ApolloReactCommon.MutationFunction<GetPasswordOtpMutation, GetPasswordOtpMutationVariables>;

/**
 * __useGetPasswordOtpMutation__
 *
 * To run a mutation, you first call `useGetPasswordOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetPasswordOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getPasswordOtpMutation, { data, loading, error }] = useGetPasswordOtpMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetPasswordOtpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<GetPasswordOtpMutation, GetPasswordOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<GetPasswordOtpMutation, GetPasswordOtpMutationVariables>(GetPasswordOtpDocument, options);
      }
export type GetPasswordOtpMutationHookResult = ReturnType<typeof useGetPasswordOtpMutation>;
export type GetPasswordOtpMutationResult = ApolloReactCommon.MutationResult<GetPasswordOtpMutation>;
export type GetPasswordOtpMutationOptions = ApolloReactCommon.BaseMutationOptions<GetPasswordOtpMutation, GetPasswordOtpMutationVariables>;
export const UpdateReferralDocument = gql`
    mutation updateReferral($referralcode: String!) {
  updateReferral(referralcode: $referralcode)
}
    `;
export type UpdateReferralMutationFn = ApolloReactCommon.MutationFunction<UpdateReferralMutation, UpdateReferralMutationVariables>;

/**
 * __useUpdateReferralMutation__
 *
 * To run a mutation, you first call `useUpdateReferralMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReferralMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReferralMutation, { data, loading, error }] = useUpdateReferralMutation({
 *   variables: {
 *      referralcode: // value for 'referralcode'
 *   },
 * });
 */
export function useUpdateReferralMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateReferralMutation, UpdateReferralMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateReferralMutation, UpdateReferralMutationVariables>(UpdateReferralDocument, options);
      }
export type UpdateReferralMutationHookResult = ReturnType<typeof useUpdateReferralMutation>;
export type UpdateReferralMutationResult = ApolloReactCommon.MutationResult<UpdateReferralMutation>;
export type UpdateReferralMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateReferralMutation, UpdateReferralMutationVariables>;
export const AddEventDocument = gql`
    mutation addEvent($data: AddEventInput!) {
  addEvent(data: $data) {
    name
    id
  }
}
    `;
export type AddEventMutationFn = ApolloReactCommon.MutationFunction<AddEventMutation, AddEventMutationVariables>;

/**
 * __useAddEventMutation__
 *
 * To run a mutation, you first call `useAddEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addEventMutation, { data, loading, error }] = useAddEventMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddEventMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddEventMutation, AddEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<AddEventMutation, AddEventMutationVariables>(AddEventDocument, options);
      }
export type AddEventMutationHookResult = ReturnType<typeof useAddEventMutation>;
export type AddEventMutationResult = ApolloReactCommon.MutationResult<AddEventMutation>;
export type AddEventMutationOptions = ApolloReactCommon.BaseMutationOptions<AddEventMutation, AddEventMutationVariables>;
export const EditEventDocument = gql`
    mutation editEvent($data: EditEventInput!, $id: String!) {
  editEvent(data: $data, eventID: $id)
}
    `;
export type EditEventMutationFn = ApolloReactCommon.MutationFunction<EditEventMutation, EditEventMutationVariables>;

/**
 * __useEditEventMutation__
 *
 * To run a mutation, you first call `useEditEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editEventMutation, { data, loading, error }] = useEditEventMutation({
 *   variables: {
 *      data: // value for 'data'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEditEventMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditEventMutation, EditEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<EditEventMutation, EditEventMutationVariables>(EditEventDocument, options);
      }
export type EditEventMutationHookResult = ReturnType<typeof useEditEventMutation>;
export type EditEventMutationResult = ApolloReactCommon.MutationResult<EditEventMutation>;
export type EditEventMutationOptions = ApolloReactCommon.BaseMutationOptions<EditEventMutation, EditEventMutationVariables>;
export const DeleteEventDocument = gql`
    mutation deleteEvent($id: String!) {
  deleteEvent(id: $id)
}
    `;
export type DeleteEventMutationFn = ApolloReactCommon.MutationFunction<DeleteEventMutation, DeleteEventMutationVariables>;

/**
 * __useDeleteEventMutation__
 *
 * To run a mutation, you first call `useDeleteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventMutation, { data, loading, error }] = useDeleteEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEventMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteEventMutation, DeleteEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, options);
      }
export type DeleteEventMutationHookResult = ReturnType<typeof useDeleteEventMutation>;
export type DeleteEventMutationResult = ApolloReactCommon.MutationResult<DeleteEventMutation>;
export type DeleteEventMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteEventMutation, DeleteEventMutationVariables>;
export const EditProfileDocument = gql`
    mutation editProfile($data: EditProfileInput!) {
  editProfile(data: $data)
}
    `;
export type EditProfileMutationFn = ApolloReactCommon.MutationFunction<EditProfileMutation, EditProfileMutationVariables>;

/**
 * __useEditProfileMutation__
 *
 * To run a mutation, you first call `useEditProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProfileMutation, { data, loading, error }] = useEditProfileMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditProfileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditProfileMutation, EditProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<EditProfileMutation, EditProfileMutationVariables>(EditProfileDocument, options);
      }
export type EditProfileMutationHookResult = ReturnType<typeof useEditProfileMutation>;
export type EditProfileMutationResult = ApolloReactCommon.MutationResult<EditProfileMutation>;
export type EditProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<EditProfileMutation, EditProfileMutationVariables>;
export const CreateEventFaqDocument = gql`
    mutation createEventFAQ($data: CreateEventFAQInput!, $id: String!) {
  createEventFAQ(data: $data, EventID: $id)
}
    `;
export type CreateEventFaqMutationFn = ApolloReactCommon.MutationFunction<CreateEventFaqMutation, CreateEventFaqMutationVariables>;

/**
 * __useCreateEventFaqMutation__
 *
 * To run a mutation, you first call `useCreateEventFaqMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventFaqMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventFaqMutation, { data, loading, error }] = useCreateEventFaqMutation({
 *   variables: {
 *      data: // value for 'data'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCreateEventFaqMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateEventFaqMutation, CreateEventFaqMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateEventFaqMutation, CreateEventFaqMutationVariables>(CreateEventFaqDocument, options);
      }
export type CreateEventFaqMutationHookResult = ReturnType<typeof useCreateEventFaqMutation>;
export type CreateEventFaqMutationResult = ApolloReactCommon.MutationResult<CreateEventFaqMutation>;
export type CreateEventFaqMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateEventFaqMutation, CreateEventFaqMutationVariables>;
export const EditEventFaqDocument = gql`
    mutation editEventFAQ($data: EditEventFAQInput!, $id: String!) {
  editEventFAQ(data: $data, EventFAQID: $id)
}
    `;
export type EditEventFaqMutationFn = ApolloReactCommon.MutationFunction<EditEventFaqMutation, EditEventFaqMutationVariables>;

/**
 * __useEditEventFaqMutation__
 *
 * To run a mutation, you first call `useEditEventFaqMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditEventFaqMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editEventFaqMutation, { data, loading, error }] = useEditEventFaqMutation({
 *   variables: {
 *      data: // value for 'data'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEditEventFaqMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditEventFaqMutation, EditEventFaqMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<EditEventFaqMutation, EditEventFaqMutationVariables>(EditEventFaqDocument, options);
      }
export type EditEventFaqMutationHookResult = ReturnType<typeof useEditEventFaqMutation>;
export type EditEventFaqMutationResult = ApolloReactCommon.MutationResult<EditEventFaqMutation>;
export type EditEventFaqMutationOptions = ApolloReactCommon.BaseMutationOptions<EditEventFaqMutation, EditEventFaqMutationVariables>;
export const DeleteEventFaqDocument = gql`
    mutation deleteEventFAQ($id: String!) {
  deleteEventFAQ(EventFAQID: $id)
}
    `;
export type DeleteEventFaqMutationFn = ApolloReactCommon.MutationFunction<DeleteEventFaqMutation, DeleteEventFaqMutationVariables>;

/**
 * __useDeleteEventFaqMutation__
 *
 * To run a mutation, you first call `useDeleteEventFaqMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventFaqMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventFaqMutation, { data, loading, error }] = useDeleteEventFaqMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEventFaqMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteEventFaqMutation, DeleteEventFaqMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteEventFaqMutation, DeleteEventFaqMutationVariables>(DeleteEventFaqDocument, options);
      }
export type DeleteEventFaqMutationHookResult = ReturnType<typeof useDeleteEventFaqMutation>;
export type DeleteEventFaqMutationResult = ApolloReactCommon.MutationResult<DeleteEventFaqMutation>;
export type DeleteEventFaqMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteEventFaqMutation, DeleteEventFaqMutationVariables>;
export const LeaveTeamDocument = gql`
    mutation leaveTeam($id: String!) {
  leaveTeam(data: $id)
}
    `;
export type LeaveTeamMutationFn = ApolloReactCommon.MutationFunction<LeaveTeamMutation, LeaveTeamMutationVariables>;

/**
 * __useLeaveTeamMutation__
 *
 * To run a mutation, you first call `useLeaveTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLeaveTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [leaveTeamMutation, { data, loading, error }] = useLeaveTeamMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLeaveTeamMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LeaveTeamMutation, LeaveTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LeaveTeamMutation, LeaveTeamMutationVariables>(LeaveTeamDocument, options);
      }
export type LeaveTeamMutationHookResult = ReturnType<typeof useLeaveTeamMutation>;
export type LeaveTeamMutationResult = ApolloReactCommon.MutationResult<LeaveTeamMutation>;
export type LeaveTeamMutationOptions = ApolloReactCommon.BaseMutationOptions<LeaveTeamMutation, LeaveTeamMutationVariables>;
export const AddTimingsDocument = gql`
    mutation addTimings($id: String!, $data: AddTimingsInput!) {
  addTimings(id: $id, data: $data)
}
    `;
export type AddTimingsMutationFn = ApolloReactCommon.MutationFunction<AddTimingsMutation, AddTimingsMutationVariables>;

/**
 * __useAddTimingsMutation__
 *
 * To run a mutation, you first call `useAddTimingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTimingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTimingsMutation, { data, loading, error }] = useAddTimingsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddTimingsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddTimingsMutation, AddTimingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<AddTimingsMutation, AddTimingsMutationVariables>(AddTimingsDocument, options);
      }
export type AddTimingsMutationHookResult = ReturnType<typeof useAddTimingsMutation>;
export type AddTimingsMutationResult = ApolloReactCommon.MutationResult<AddTimingsMutation>;
export type AddTimingsMutationOptions = ApolloReactCommon.BaseMutationOptions<AddTimingsMutation, AddTimingsMutationVariables>;
export const DeleteTimingsDocument = gql`
    mutation deleteTimings($id: String!) {
  deleteTimings(id: $id)
}
    `;
export type DeleteTimingsMutationFn = ApolloReactCommon.MutationFunction<DeleteTimingsMutation, DeleteTimingsMutationVariables>;

/**
 * __useDeleteTimingsMutation__
 *
 * To run a mutation, you first call `useDeleteTimingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTimingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTimingsMutation, { data, loading, error }] = useDeleteTimingsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTimingsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTimingsMutation, DeleteTimingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteTimingsMutation, DeleteTimingsMutationVariables>(DeleteTimingsDocument, options);
      }
export type DeleteTimingsMutationHookResult = ReturnType<typeof useDeleteTimingsMutation>;
export type DeleteTimingsMutationResult = ApolloReactCommon.MutationResult<DeleteTimingsMutation>;
export type DeleteTimingsMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTimingsMutation, DeleteTimingsMutationVariables>;
export const EarlybidofferDocument = gql`
    mutation earlybidoffer($id: String!, $amount: String!) {
  earlybidoffer(eventID: $id, amount: $amount)
}
    `;
export type EarlybidofferMutationFn = ApolloReactCommon.MutationFunction<EarlybidofferMutation, EarlybidofferMutationVariables>;

/**
 * __useEarlybidofferMutation__
 *
 * To run a mutation, you first call `useEarlybidofferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEarlybidofferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [earlybidofferMutation, { data, loading, error }] = useEarlybidofferMutation({
 *   variables: {
 *      id: // value for 'id'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useEarlybidofferMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EarlybidofferMutation, EarlybidofferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<EarlybidofferMutation, EarlybidofferMutationVariables>(EarlybidofferDocument, options);
      }
export type EarlybidofferMutationHookResult = ReturnType<typeof useEarlybidofferMutation>;
export type EarlybidofferMutationResult = ApolloReactCommon.MutationResult<EarlybidofferMutation>;
export type EarlybidofferMutationOptions = ApolloReactCommon.BaseMutationOptions<EarlybidofferMutation, EarlybidofferMutationVariables>;
export const RegisterChessDocument = gql`
    mutation registerChess($data: registerBlitzChessInput!) {
  registerChess(data: $data) {
    orderId
  }
}
    `;
export type RegisterChessMutationFn = ApolloReactCommon.MutationFunction<RegisterChessMutation, RegisterChessMutationVariables>;

/**
 * __useRegisterChessMutation__
 *
 * To run a mutation, you first call `useRegisterChessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterChessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerChessMutation, { data, loading, error }] = useRegisterChessMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterChessMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterChessMutation, RegisterChessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RegisterChessMutation, RegisterChessMutationVariables>(RegisterChessDocument, options);
      }
export type RegisterChessMutationHookResult = ReturnType<typeof useRegisterChessMutation>;
export type RegisterChessMutationResult = ApolloReactCommon.MutationResult<RegisterChessMutation>;
export type RegisterChessMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterChessMutation, RegisterChessMutationVariables>;
export const CapturePaymentChessDocument = gql`
    mutation capturePaymentChess($input: CapturePaymentChessInput!) {
  capturePaymentChess(Input: $input)
}
    `;
export type CapturePaymentChessMutationFn = ApolloReactCommon.MutationFunction<CapturePaymentChessMutation, CapturePaymentChessMutationVariables>;

/**
 * __useCapturePaymentChessMutation__
 *
 * To run a mutation, you first call `useCapturePaymentChessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCapturePaymentChessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [capturePaymentChessMutation, { data, loading, error }] = useCapturePaymentChessMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCapturePaymentChessMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CapturePaymentChessMutation, CapturePaymentChessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CapturePaymentChessMutation, CapturePaymentChessMutationVariables>(CapturePaymentChessDocument, options);
      }
export type CapturePaymentChessMutationHookResult = ReturnType<typeof useCapturePaymentChessMutation>;
export type CapturePaymentChessMutationResult = ApolloReactCommon.MutationResult<CapturePaymentChessMutation>;
export type CapturePaymentChessMutationOptions = ApolloReactCommon.BaseMutationOptions<CapturePaymentChessMutation, CapturePaymentChessMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    name
    shaastraID
    email
    mobile
    college
    department
    address
    city
    state
    registeredEvents {
      id
      name
      pic
      eventTimeFrom
      eventTimeTo
      registrationType
      yourTeam {
        id
        name
        members {
          name
          email
        }
      }
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export function refetchMeQuery(variables?: MeQueryVariables) {
      return { query: MeDocument, variables: variables }
    }
export const GetUsersDocument = gql`
    query getUsers($filter: GetUsersFilter!) {
  getUsers(filter: $filter) {
    count
    users {
      name
      id
      shaastraID
      email
      role
      isVerified
      verificationOTP
      registeredEvents {
        id
        name
        teamSize
        vertical
      }
    }
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export function refetchGetUsersQuery(variables: GetUsersQueryVariables) {
      return { query: GetUsersDocument, variables: variables }
    }
export const GetEventsDocument = gql`
    query getEvents($filter: String!) {
  getEvents(filter: $filter) {
    events {
      id
      name
      pic
      vertical
      description
      requirements
      platform
      firstplace
      secondplace
      thirdplace
      participation
      registrationOpenTime
      registrationCloseTime
      eventTimeFrom
      eventTimeTo
      registrationType
      teamSize
      registrationfee
    }
  }
}
    `;

/**
 * __useGetEventsQuery__
 *
 * To run a query within a React component, call `useGetEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetEventsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
      }
export function useGetEventsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
        }
export type GetEventsQueryHookResult = ReturnType<typeof useGetEventsQuery>;
export type GetEventsLazyQueryHookResult = ReturnType<typeof useGetEventsLazyQuery>;
export type GetEventsQueryResult = ApolloReactCommon.QueryResult<GetEventsQuery, GetEventsQueryVariables>;
export function refetchGetEventsQuery(variables: GetEventsQueryVariables) {
      return { query: GetEventsDocument, variables: variables }
    }
export const GetEventDocument = gql`
    query getEvent($EventID: String!) {
  getEvent(EventID: $EventID) {
    id
    name
    vertical
    description
    requirements
    pic
    registrationfee
    platform
    firstplace
    secondplace
    thirdplace
    participation
    registrationOpenTime
    registrationCloseTime
    eventTimeFrom
    eventTimeTo
    registrationType
    teamSize
    earlybidoffer
    registeredUserCount
    registeredTeamCount
    recordingUserCount
    faqs {
      id
      answer
      question
    }
    eventtimings {
      id
      name
      time
    }
  }
}
    `;

/**
 * __useGetEventQuery__
 *
 * To run a query within a React component, call `useGetEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventQuery({
 *   variables: {
 *      EventID: // value for 'EventID'
 *   },
 * });
 */
export function useGetEventQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
      }
export function useGetEventLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
        }
export type GetEventQueryHookResult = ReturnType<typeof useGetEventQuery>;
export type GetEventLazyQueryHookResult = ReturnType<typeof useGetEventLazyQuery>;
export type GetEventQueryResult = ApolloReactCommon.QueryResult<GetEventQuery, GetEventQueryVariables>;
export function refetchGetEventQuery(variables: GetEventQueryVariables) {
      return { query: GetEventDocument, variables: variables }
    }
export const GetUsersDataCsvDocument = gql`
    query getUsersDataCSV {
  getUsersDataCSV
}
    `;

/**
 * __useGetUsersDataCsvQuery__
 *
 * To run a query within a React component, call `useGetUsersDataCsvQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersDataCsvQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersDataCsvQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersDataCsvQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersDataCsvQuery, GetUsersDataCsvQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUsersDataCsvQuery, GetUsersDataCsvQueryVariables>(GetUsersDataCsvDocument, options);
      }
export function useGetUsersDataCsvLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersDataCsvQuery, GetUsersDataCsvQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUsersDataCsvQuery, GetUsersDataCsvQueryVariables>(GetUsersDataCsvDocument, options);
        }
export type GetUsersDataCsvQueryHookResult = ReturnType<typeof useGetUsersDataCsvQuery>;
export type GetUsersDataCsvLazyQueryHookResult = ReturnType<typeof useGetUsersDataCsvLazyQuery>;
export type GetUsersDataCsvQueryResult = ApolloReactCommon.QueryResult<GetUsersDataCsvQuery, GetUsersDataCsvQueryVariables>;
export function refetchGetUsersDataCsvQuery(variables?: GetUsersDataCsvQueryVariables) {
      return { query: GetUsersDataCsvDocument, variables: variables }
    }
export const ExportCsvDocument = gql`
    query exportCSV($EventID: String!) {
  exportCSV(EventID: $EventID)
}
    `;

/**
 * __useExportCsvQuery__
 *
 * To run a query within a React component, call `useExportCsvQuery` and pass it any options that fit your needs.
 * When your component renders, `useExportCsvQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExportCsvQuery({
 *   variables: {
 *      EventID: // value for 'EventID'
 *   },
 * });
 */
export function useExportCsvQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ExportCsvQuery, ExportCsvQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ExportCsvQuery, ExportCsvQueryVariables>(ExportCsvDocument, options);
      }
export function useExportCsvLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ExportCsvQuery, ExportCsvQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ExportCsvQuery, ExportCsvQueryVariables>(ExportCsvDocument, options);
        }
export type ExportCsvQueryHookResult = ReturnType<typeof useExportCsvQuery>;
export type ExportCsvLazyQueryHookResult = ReturnType<typeof useExportCsvLazyQuery>;
export type ExportCsvQueryResult = ApolloReactCommon.QueryResult<ExportCsvQuery, ExportCsvQueryVariables>;
export function refetchExportCsvQuery(variables: ExportCsvQueryVariables) {
      return { query: ExportCsvDocument, variables: variables }
    }
export const GetChessDetailsCsvDocument = gql`
    query getChessDetailsCSV {
  getChessDetailsCSV
}
    `;

/**
 * __useGetChessDetailsCsvQuery__
 *
 * To run a query within a React component, call `useGetChessDetailsCsvQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChessDetailsCsvQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChessDetailsCsvQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChessDetailsCsvQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetChessDetailsCsvQuery, GetChessDetailsCsvQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetChessDetailsCsvQuery, GetChessDetailsCsvQueryVariables>(GetChessDetailsCsvDocument, options);
      }
export function useGetChessDetailsCsvLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetChessDetailsCsvQuery, GetChessDetailsCsvQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetChessDetailsCsvQuery, GetChessDetailsCsvQueryVariables>(GetChessDetailsCsvDocument, options);
        }
export type GetChessDetailsCsvQueryHookResult = ReturnType<typeof useGetChessDetailsCsvQuery>;
export type GetChessDetailsCsvLazyQueryHookResult = ReturnType<typeof useGetChessDetailsCsvLazyQuery>;
export type GetChessDetailsCsvQueryResult = ApolloReactCommon.QueryResult<GetChessDetailsCsvQuery, GetChessDetailsCsvQueryVariables>;
export function refetchGetChessDetailsCsvQuery(variables?: GetChessDetailsCsvQueryVariables) {
      return { query: GetChessDetailsCsvDocument, variables: variables }
    }
export const TShirtDetailsCsvDocument = gql`
    query TShirtDetailsCSV {
  TShirtDetailsCSV
}
    `;

/**
 * __useTShirtDetailsCsvQuery__
 *
 * To run a query within a React component, call `useTShirtDetailsCsvQuery` and pass it any options that fit your needs.
 * When your component renders, `useTShirtDetailsCsvQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTShirtDetailsCsvQuery({
 *   variables: {
 *   },
 * });
 */
export function useTShirtDetailsCsvQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TShirtDetailsCsvQuery, TShirtDetailsCsvQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TShirtDetailsCsvQuery, TShirtDetailsCsvQueryVariables>(TShirtDetailsCsvDocument, options);
      }
export function useTShirtDetailsCsvLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TShirtDetailsCsvQuery, TShirtDetailsCsvQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TShirtDetailsCsvQuery, TShirtDetailsCsvQueryVariables>(TShirtDetailsCsvDocument, options);
        }
export type TShirtDetailsCsvQueryHookResult = ReturnType<typeof useTShirtDetailsCsvQuery>;
export type TShirtDetailsCsvLazyQueryHookResult = ReturnType<typeof useTShirtDetailsCsvLazyQuery>;
export type TShirtDetailsCsvQueryResult = ApolloReactCommon.QueryResult<TShirtDetailsCsvQuery, TShirtDetailsCsvQueryVariables>;
export function refetchTShirtDetailsCsvQuery(variables?: TShirtDetailsCsvQueryVariables) {
      return { query: TShirtDetailsCsvDocument, variables: variables }
    }
export const RecordingUsersCsvDocument = gql`
    query recordingUsersCSV($EventID: String!) {
  recordingUsersCSV(EventID: $EventID)
}
    `;

/**
 * __useRecordingUsersCsvQuery__
 *
 * To run a query within a React component, call `useRecordingUsersCsvQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecordingUsersCsvQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecordingUsersCsvQuery({
 *   variables: {
 *      EventID: // value for 'EventID'
 *   },
 * });
 */
export function useRecordingUsersCsvQuery(baseOptions: ApolloReactHooks.QueryHookOptions<RecordingUsersCsvQuery, RecordingUsersCsvQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<RecordingUsersCsvQuery, RecordingUsersCsvQueryVariables>(RecordingUsersCsvDocument, options);
      }
export function useRecordingUsersCsvLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RecordingUsersCsvQuery, RecordingUsersCsvQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<RecordingUsersCsvQuery, RecordingUsersCsvQueryVariables>(RecordingUsersCsvDocument, options);
        }
export type RecordingUsersCsvQueryHookResult = ReturnType<typeof useRecordingUsersCsvQuery>;
export type RecordingUsersCsvLazyQueryHookResult = ReturnType<typeof useRecordingUsersCsvLazyQuery>;
export type RecordingUsersCsvQueryResult = ApolloReactCommon.QueryResult<RecordingUsersCsvQuery, RecordingUsersCsvQueryVariables>;
export function refetchRecordingUsersCsvQuery(variables: RecordingUsersCsvQueryVariables) {
      return { query: RecordingUsersCsvDocument, variables: variables }
    }
export const GetPaidUsersCountDocument = gql`
    query getPaidUsersCount {
  getPaidUsersCount
}
    `;

/**
 * __useGetPaidUsersCountQuery__
 *
 * To run a query within a React component, call `useGetPaidUsersCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaidUsersCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaidUsersCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPaidUsersCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPaidUsersCountQuery, GetPaidUsersCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetPaidUsersCountQuery, GetPaidUsersCountQueryVariables>(GetPaidUsersCountDocument, options);
      }
export function useGetPaidUsersCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPaidUsersCountQuery, GetPaidUsersCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetPaidUsersCountQuery, GetPaidUsersCountQueryVariables>(GetPaidUsersCountDocument, options);
        }
export type GetPaidUsersCountQueryHookResult = ReturnType<typeof useGetPaidUsersCountQuery>;
export type GetPaidUsersCountLazyQueryHookResult = ReturnType<typeof useGetPaidUsersCountLazyQuery>;
export type GetPaidUsersCountQueryResult = ApolloReactCommon.QueryResult<GetPaidUsersCountQuery, GetPaidUsersCountQueryVariables>;
export function refetchGetPaidUsersCountQuery(variables?: GetPaidUsersCountQueryVariables) {
      return { query: GetPaidUsersCountDocument, variables: variables }
    }
export const GetAllRecordingUsersCountDocument = gql`
    query getAllRecordingUsersCount {
  getAllRecordingUsersCount
}
    `;

/**
 * __useGetAllRecordingUsersCountQuery__
 *
 * To run a query within a React component, call `useGetAllRecordingUsersCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRecordingUsersCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRecordingUsersCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllRecordingUsersCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllRecordingUsersCountQuery, GetAllRecordingUsersCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAllRecordingUsersCountQuery, GetAllRecordingUsersCountQueryVariables>(GetAllRecordingUsersCountDocument, options);
      }
export function useGetAllRecordingUsersCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllRecordingUsersCountQuery, GetAllRecordingUsersCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAllRecordingUsersCountQuery, GetAllRecordingUsersCountQueryVariables>(GetAllRecordingUsersCountDocument, options);
        }
export type GetAllRecordingUsersCountQueryHookResult = ReturnType<typeof useGetAllRecordingUsersCountQuery>;
export type GetAllRecordingUsersCountLazyQueryHookResult = ReturnType<typeof useGetAllRecordingUsersCountLazyQuery>;
export type GetAllRecordingUsersCountQueryResult = ApolloReactCommon.QueryResult<GetAllRecordingUsersCountQuery, GetAllRecordingUsersCountQueryVariables>;
export function refetchGetAllRecordingUsersCountQuery(variables?: GetAllRecordingUsersCountQueryVariables) {
      return { query: GetAllRecordingUsersCountDocument, variables: variables }
    }