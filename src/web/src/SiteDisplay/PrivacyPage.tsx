import {AppHeader} from "../AppHeader";
import {AppFooter} from "../AppFooter";

export function PrivacyPage() {
    const company = "Source Code Owner";
    const service = "Tach Game Engine";
    const url = "tach.io";
    return <>
        <div className="container mx-auto px-4">
            <AppHeader/>
            <h2> Privacy Policy </h2>
            <p>
                {company} takes your privacy seriously. To better protect your privacy {company} provide this privacy
                policy
                notice explaining the way your personal information is collected and used.
                Collection of Routine Information

                This {url} track basic information about their "visitors" or "users". This information includes, but is
                not
                limited to, IP addresses, "browser" or "app" details, timestamps and referring pages. None of this
                information can personally identify specific "visitors" or "user" to this "website". The
                information is tracked for routine administration and maintenance purposes, but we reserve the right to
                use
                it for any reason.
            </p>
            <h3>Cookies</h3>
            <p>
                Where necessary, this {url} uses cookies to store information about a visitor’s preferences and history
                in
                order to better serve the "visitor" or "user" and/or present the "visitor" or "user" with customized
                content.
            </p>
            <h3>Advertisement and Other Third Parties</h3>
            <p>
                Advertising partners and other third parties may use cookies, scripts and/or web beacons to track
                "visitors"
                or "user" activities on this {url} in order to display advertisements and other useful information. Such
                tracking is done directly by the third parties through their own servers and is subject to their own
                privacy
                policies. This {url} has no access or control over these cookies, scripts and/or web beacons that may be
                used by third parties. Learn how to opt out of Google’s cookie usage.
            </p>
            <h3>Links to Third Party Websites</h3>
            <p>
                {company} have included links on this {url} for your use and reference. {company} are not responsible
                for
                the privacy policies on these websites. You should be aware that the privacy policies of these websites
                may
                differ from "our" own.
            </p>
            <h3>Security</h3>
            <p>
                The security of your personal information is important to "us", but remember that no method of
                transmission
                over the Internet, or method of electronic storage, is 100% secure. While "we" strive to use
                commercially acceptable means to protect your personal information, "we" cannot guarantee its
                absolute security.
            </p>
            <h3>Changes To This Privacy Policy</h3>
            <p>
                This Privacy Policy is effective as of Dec 25, 2022 and will remain in effect except with respect to any
                changes in its provisions in the future, which will be in effect immediately after being posted on this
                page.
            </p>
            <p>
                We reserve the right to update or change the Privacy Policy at any time and you should check this
                Privacy
                Policy periodically.
            </p>
            <h3>Contact Information</h3>
            <p>
                For any questions or concerns regarding the privacy policy, please send "us" an email to mbostwick 89 at
                googlemail dot com.
            </p>
            <AppFooter/>
        </div>
    </>
}
