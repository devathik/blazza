// import env from "@/config/env";
// import nodemailer from "nodemailer";

// // Build transporter function
// const buildTransporter = () => {
//     return nodemailer.createTransport({
//         host: env.email.host,
//         port: Number(env.email.port) || 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: env.email.email_user,
//             pass: env.email.email_pass,
//         },
//     });
// };

// interface EmailOptions {
//     from: string;
//     to: string | string[];
//     cc?: string | string[];
//     subject: string;
//     text?: string;
//     html?: string;
//     replyTo?: string | string[];
//     attachments?: { filename: string; content: Buffer | string; contentType?: string }[];
//     auth?: {
//         user: string;
//         pass: string;
//     }
// }

// export const sendEmail = async (options: EmailOptions) => {
//     const transporter = buildTransporter();
//     await transporter.verify();

//     // Use provided auth or fall back to env
//     const auth = options.auth || {
//         user: env.email.email_user,
//         pass: env.email.email_pass,
//     };

//     // Send email
//     const info = await transporter.sendMail({
//         from: options.from,
//         to: options.to,
//         cc: options.cc,
//         subject: options.subject,
//         text: options.text,
//         replyTo: options.replyTo,
//         html: options.html,
//         attachments: options.attachments,
//         auth: {
//             user: auth.user,
//             pass: auth.pass,
//         }
//     });

//     console.log("Email sent:", info.messageId);
//     return info;
// };


// export const sendEmailWithRetry = async (
//     emailOptions: any,
//     maxRetries = 3,
//     initialDelay = 1000
// ): Promise<void> => {
//     let lastError: any;

//     for (let attempt = 1; attempt <= maxRetries; attempt++) {
//         try {
//             await sendEmail(emailOptions);
//             return; // Success
//         } catch (error: any) {
//             lastError = error;

//             // Check if it's a transient error that should be retried
//             const isTransientError =
//                 error?.responseCode === 454 || // Try again later
//                 error?.code === 'ETLS' || // TLS/STARTTLS issues
//                 error?.code === 'ETIMEDOUT' || // Timeout
//                 error?.code === 'ECONNRESET' || // Connection reset
//                 error?.response?.includes('Try again later');

//             if (!isTransientError || attempt === maxRetries) {
//                 // Don't retry permanent errors or if we've exhausted retries
//                 throw error;
//             }

//             // Exponential backoff: 1s, 2s, 4s
//             const delay = initialDelay * Math.pow(2, attempt - 1);
//             console.log(`⟳ Email attempt ${attempt}/${maxRetries} failed. Retrying in ${delay}ms...`);
//             await new Promise(resolve => setTimeout(resolve, delay));
//         }
//     }

//     throw lastError;
// };