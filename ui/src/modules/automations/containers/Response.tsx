import { useSubscription } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { IUser } from 'modules/auth/types';
import { subscriptions } from 'modules/automations/graphql';
import React from 'react';

const SUBSCRIPTION = gql(subscriptions.automationSubscription);

type Props = {
  currentUser: IUser;
};

function AutomationResponse({ currentUser }: Props) {
  if (!sessionStorage.getItem('sessioncode')) {
    sessionStorage.setItem('sessioncode', Math.random().toString());
  }

  const { data: response, loading } = useSubscription(SUBSCRIPTION, {
    variables: {
      userId: currentUser._id,
      sessionCode: sessionStorage.getItem('sessioncode') || ''
    },
    shouldResubscribe: false
  });

  if (!response || loading) {
    return <></>;
  }

  const content = response.automationResponded.content;
  const responseId = response.automationResponded.responseId;

  if (!content || !content[0]) {
    return <></>;
  }

  if (
    localStorage.getItem('automationResponseId') &&
    localStorage.getItem('automationResponseId') === responseId
  ) {
    return <></>;
  }

  const myWindow =
    window.open('', '_blank', 'width=800, height=800') || ({} as any);

  localStorage.setItem('automationResponseId', responseId);

  if ('document' in myWindow && 'write' in myWindow.document) {
    myWindow.document.write(content[0]);
  } else {
    alert('please allow Pop-ups and redirects on site settings!!!');
  }

  return <></>;
}

export default AutomationResponse;
