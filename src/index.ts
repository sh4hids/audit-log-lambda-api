/* eslint-disable import/prefer-default-export */
import { APIGatewayProxyHandler } from 'aws-lambda';

import * as AuditLogModel from './models/AuditLog';

export const handler: APIGatewayProxyHandler = async function (event) {
  const { formId } = event?.queryStringParameters ?? {};

  if (!formId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Form id must be provided' }),
    };
  }

  // const logs = await AuditLogModel.getByFormId(formId);
  const logs = {};

  return {
    statusCode: 200,
    body: JSON.stringify(logs),
  };
};

// (async () => {
//   console.log(
//     await handler(
//       {
//         resource: '/logs',
//         path: '/logs',
//         httpMethod: 'GET',
//         headers: {
//           header1: 'value1',
//           header2: 'value2',
//         },
//         multiValueHeaders: {
//           header1: ['value1'],
//           header2: ['value1', 'value2'],
//         },
//         queryStringParameters: {
//           formId: '123',
//         },
//         multiValueQueryStringParameters: {
//           parameter1: ['value1', 'value2'],
//           parameter2: ['value'],
//         },
//         requestContext: {
//           accountId: '123456789012',
//           apiId: 'id',
//           authorizer: {
//             claims: null,
//             scopes: null,
//           },
//           domainName: 'id.execute-api.us-east-1.amazonaws.com',
//           domainPrefix: 'id',
//           extendedRequestId: 'request-id',
//           httpMethod: 'GET',
//           identity: {
//             accessKey: null,
//             apiKeyId: null,
//             apiKey: null,
//             accountId: null,
//             caller: null,
//             cognitoAuthenticationProvider: null,
//             cognitoAuthenticationType: null,
//             cognitoIdentityId: null,
//             cognitoIdentityPoolId: null,
//             principalOrgId: null,
//             sourceIp: 'IP',
//             user: null,
//             userAgent: 'user-agent',
//             userArn: null,
//             clientCert: {
//               clientCertPem: 'CERT_CONTENT',
//               subjectDN: 'www.example.com',
//               issuerDN: 'Example issuer',
//               serialNumber: 'a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1',
//               validity: {
//                 notBefore: 'May 28 12:30:02 2019 GMT',
//                 notAfter: 'Aug  5 09:36:04 2021 GMT',
//               },
//             },
//           },
//           path: '/logs',
//           protocol: 'HTTP/1.1',
//           requestId: 'id=',
//           requestTime: '04/Mar/2020:19:15:17 +0000',
//           requestTimeEpoch: 1583349317135,
//           resourceId: null,
//           resourcePath: '/logs',
//           stage: '$default',
//         },
//         pathParameters: null,
//         stageVariables: null,
//         body: 'Hello from Lambda!',
//         isBase64Encoded: false,
//       },
//       null,
//       null
//     )
//   );
// })();
