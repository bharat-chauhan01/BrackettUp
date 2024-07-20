import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const BoldText = ({ txt }) => <Text style={{ fontWeight: 'bold' }}>{txt}</Text>;

const Link = ({ Url, childern }) => (
  <Text
    style={{ color: 'blue' }}
    onPress={() => {
      Alert.alert(`clicked Thanks ${Url}`);
    }}
  >
    {childern}
  </Text>
);

const TermsAndConditions = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-back"
            style={styles.iconStyle}
            size={styles.headerText.fontSize + 5}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Privacy Policy</Text>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.text}>
          Welcome to BrackettUp! These Terms of Use (“Terms”) are a contract between you and
          BrackettUp. If you are in the India, BrackettUp means BrackettUp India Limited. These
          Terms govern your access to and use of any BrackettUp website, mobile application (such as
          for iPhone or Android) or content (the “Site”) or any fitness, recreational, wellness, or
          other classes, experiences, activities, events, services, recordings, and/or products made
          available through BrackettUp (collectively, “Classes”). Please read these Terms carefully
          before accessing and using the Site or Classes. These terms are subject to any applicable
          region-specific amendments set forth at the end of this page in the section entitled
          "Regional Amendments". Please review that section for amendments applicable to your
          region. If you need to contact us, you can do so by:{'\n'}
          {'\n'}● writing to us at F-197 2nd floor, Pandav Nagar, Delhi-110091, Attention:
          BrackettUp Customer Support; or b) Amendment of Terms. BrackettUp may amend the Terms from
          time to time. Unless we provide a delayed effective date, all amendments will be effective
          upon posting of such updated Terms. Your continued access to or use of the Site or Classes
          after such posting constitutes your consent to be bound by the Terms, as amended.
          {'\n'}● contact us through our enquiry form{' '}
          <Link Url="https://help.classpass.com/hc/en-us/requests/new" childern="Here">
            Here.
          </Link>
          {'\n'}
          {'\n'}b) Amendment of Terms. BrackettUp may amend the Terms from time to time. Unless we
          provide a delayed effective date, all amendments will be effective upon posting of such
          updated Terms. Your continued access to or use of the Site or Classes after such posting
          constitutes your consent to be bound by the Terms, as amended. The most current version of
          these Terms can be accessed at any time at{'\n'}{' '}
          <Link Url="https://classpass.com/terms/" childern="here"></Link>. Changes to these Terms
          will be notified via posting on{'\n'} the Site (or other written notice to you). Please
          read these Terms carefully before{'\n'} accessing and/or using the Site and/or Classes.{' '}
          {'\n'}
          {'\n'}
          <BoldText txt="1. Terms"></BoldText>
          {'\n'}
          {'\n'}
          a) Acceptance of Terms. By accessing and/or using the Site and/or Classes, or{'\n'}{' '}
          clicking any button to indicate your consent, you accept and agree to be bound by{'\n'}{' '}
          these Terms, just as if you had agreed to these Terms in writing. If you do not agree
          {'\n'} to these Terms, do not use the Site or any classes.
          {'\n'}
          {'\n'}b) Amendment of Terms. BrackettUp may amend the Terms from time to time. Unless we
          provide a delayed effective date, all amendments will be effective upon posting of such
          updated Terms. Your continued access to or use of the Site or Classes after such posting
          constitutes your consent to be bound by the Terms, as amended.
          {'\n'}
          {'\n'}c) Additional Terms. In addition to these Terms, certain plans, offers, products,
          services, elements or features may also be subject to additional terms, conditions
          guidelines or rules which may be posted, communicated or modified by us or applicable
          third parties at any time. Your use of any such plan, offer, product, service, element or
          feature is subject to those additional terms and conditions, which are hereby incorporated
          by reference into the Terms, provided that in the event of any conflict between such
          additional terms and the Terms, the Terms shall control. The BrackettUp Privacy Policy is
          hereby incorporated by reference.
          {'\n'}
          {'\n'}
          <BoldText txt="2.BrackettUp Platform"></BoldText>
          {'\n'}
          {'\n'}a) BrackettUp Platform. The BrackettUp platform enables consumers to reserve,
          schedule, purchase, access and attend a wide range of fitness, recreational and wellness
          Classes offered and operated by fitness studios, gyms, trainers, venues or other third
          parties (collectively, “Venues”). BrackettUp itself is not a gymnasium, place of amusement
          or recreation, health club, facility, fitness studio or similar establishment and does not
          own, operate or control any of the Classes that are offered at or through such facilities.
          {'\n'}
          {'\n'}b) Membership Options. There are a number of ways to participate in BrackettUp, such
          as various subscription plans, promotional plans, and non-subscription purchases. These
          options consist of different classes, services and features and may be subject to
          additional and differing conditions, prices, policies and limitations. We reserve the
          right to modify, terminate or otherwise amend our offered options and plans at any time in
          our discretion. From time to time we may permit non-subscribers to access certain classes,
          services, content or features for a cost or at no cost. BrackettUp makes no commitment on
          the quantity, availability, type or frequency at which such classes, services, content and
          features will be available to non-subscribers and may modify, discontinue, remove or
          suspend access at any time and for any reason in our sole discretion.
          {'\n'}
          {'\n'}c) Use of Credits. Depending on the subscription plan you choose and purchase, you
          will be allotted credits to be used solely to book Classes each Subscription Cycle. You
          can choose how you use your credits across the various Classes available to you.
          {'\n'}
          {'\n'}Credits expire at the end of each Subscription Cycle, meaning that any credits you
          don’t use during the applicable Subscription Cycle will not roll over into future months,
          unless we expressly communicate otherwise. You can find more information about the current
          rollover policies here. You can see how many days you have left in each Subscription Cycle
          in your account settings. If your subscription is canceled or terminated your unused
          credits will expire immediately. There will be no refund or payment for any unused amount.
          When your cycle automatically renews for the next month, you’ll automatically receive your
          new allotment of credits. If you have any questions about how to use your credits, please
          contact us and we can help you.
          {'\n'}
          {'\n'}Credits have no cash value or any other value outside of the BrackettUp platform and
          are not redeemable for cash. For avoidance of doubt, the credits do not operate or serve
          as stored value facilities in any way. You may not transfer, trade, gift or otherwise
          exchange BrackettUp credits. Note that separate from credits, you can also buy a gift
          certificate. Gift certificates and credits are not the same thing. Our gift certificates
          are called “gift cards“. Unlike credits, gift cards never expire. Gift cards are discussed
          further in Section 4(b) below.
          {'\n'}
          {'\n'}d) Class Availability and Allocation. The exact number and type of Classes you take
          during any Subscription Cycle will depend on the number of credits needed to book the
          particular Classes you select. The number of credits needed to book a particular Class
          will vary and is determined based on a variety of factors, including but not limited to
          Venue requirements, time of day, equipment, facilities, the number of times you’ve visited
          a studio in the cycle, location, pricing, popularity and other characteristics. For
          example, a Class offered at a peak time is likely to require more credits to book than the
          same Class offered in the middle of the afternoon. Or, a Class that uses equipment is
          likely to require more credits to book than a Class without the use of any equipment.
          Furthermore, a Venue may require more credits for a certain Class under certain
          circumstances, such as when the Venue makes only a small number of spots available to
          BrackettUp or after multiple visits in a cycle. Note that credits needed to book Classes
          also vary from city to city. Accordingly, if BrackettUp permits you to reserve Classes in
          a city that differs from your home location, your credits may enable you to reserve more
          or fewer Classes when you are traveling from your home location. As such, the number of
          credits you need to reserve a particular Class or service may change at any time or vary
          day to day depending on the factors described here. BrackettUp also reserves the right to
          change the number of credits you receive, including per cycle, plan, geography or
          otherwise; the number of reservations you can make; and/or the number of Classes you can
          miss or cancel.
          {'\n'}
          {'\n'}BrackettUp does not guarantee the availability of particular Venues, locations,
          Classes, services, experiences, content, inventory, spots or other features, and
          availability may change over time and at any time (including during the course of any
          given Subscription Cycle). The type, quantity, credits, allocation and availability of
          Venues, Classes, and other inventory offered, are determined by BrackettUp in its sole
          discretion. BrackettUp takes certain steps to release, promote and otherwise make
          available spots and inventory at varying times and in an ongoing and evolving way.
          {'\n'}
          {'\n'}e) Digital Classes. BrackettUp may allow you to access a variety of audio or video
          digital Classes from your computer or mobile device, via live stream and/or on demand. To
          access these digital Classes, you need to comply with certain technical and hardware
          requirements. Certain digital classes may involve your participation through connected
          devices such as heart rate monitors. If you participate in such digital Classes through a
          connected device, we may collect heart rate and other metrics (e.g., points) to calculate
          your ranking in a Class leaderboard (if you sync your heart rate monitor to the Site),
          display a record of your participation, and otherwise provide, learn about and improve the
          Site and our services. If you sync your heart rate monitor with the Site to participate in
          digital Classes, you will automatically be part of the leaderboard experience, and other
          participants in the Class will see your profile information (including your profile
          picture and username) and rank in the class. Additionally, your profile information may
          appear on our Site and be viewable by other BrackettUp users. For example, BrackettUp may
          show a weekly leaderboard displaying the profiles of the ten users who have the highest
          cumulative point totals for the week. If you do not want your profile picture or username
          to be seen by other BrackettUp users, don’t include any identifying information in your
          profile, or go to your settings to change it. BrackettUp is not responsible for the
          accuracy of the heart rate monitor used in connection with the digital Classes. The heart
          rate recommendations and goals provided through these digital Classes may not be right for
          you and it is solely your responsibility to make sure that you participate in the manner
          and at the intensity level that is right for you.
          {'\n'}
          {'\n'}f) Non-Subscription Purchases. BrackettUp may permit you to purchase certain
          products or Classes through the Site, in addition to your subscription or without having a
          subscription. You acknowledge and agree that these Terms apply to any such purchase you
          make, and you will be responsible to pay the applicable fees, which may change at any
          time.
          {'\n'}
          {'\n'}g) Co-Memberships. From time to time BrackettUp may permit you to sign up for a
          co-membership that provides you with a membership to BrackettUp as well as a membership to
          a third-party Venue, such as a gym (“Venue Membership”). If you sign up for a
          co-membership, you will be subject to these Terms as well as additional terms applicable
          to the co-membership and the Venue Membership. You understand and agree that BrackettUp
          does not own, operate or control the Venue Membership and is not responsible for the Venue
          Membership, which is provided entirely by the applicable Venue and subject to the Venue's
          terms and conditions of membership.
          {'\n'}
          {'\n'}h) Use of BrackettUp. Your BrackettUp account is personal to you and you agree not
          to create more than one account. You cannot transfer or gift Classes or credits to third
          parties or allow third parties to use your BrackettUp account, including other BrackettUp
          users. You must not use or exploit the Site and/or Classes for commercial purposes. To use
          your BrackettUp membership you must have access to the Internet. We continually update and
          test various aspects of the BrackettUp platform. We reserve the right to, and by using the
          Site and/or Classes you agree that we may, include you in or exclude you from these test
          without notice. You understand and agree that BrackettUp may take actions we deem
          reasonably necessary to prevent fraud and abuse.
          {'\n'}
          {'\n'}You agree that the information you provide to BrackettUp at sign up and at all other
          times will be true, accurate, current, and complete and that you will keep this
          information accurate and up-to-date at all times. When you sign up, you will be asked to
          create a password. You are solely responsible for all activity that occurs under your
          account, including any activity by unauthorized users. To use the Site you must have
          access to the Internet and may be required to download a BrackettUp mobile application to
          use some or all of BrackettUp features. You are solely responsible for providing your own
          access (e.g., computer, mobile device, Internet connection, etc.) to the Site and Classes.
          {'\n'}
          {'\n'}i) Eligibility Criteria. The availability of all or part of our Site and/or Classes
          may be limited based on demographic, age, or other criteria as we may establish from time
          to time. You understand and agree we may disallow you from subscribing to BrackettUp or
          may terminate your subscription at any time based on these criteria. For example, you must
          be 18 years of age or older to use this Site and/or Classes and/or to purchase a
          BrackettUp subscription. You further understand that the Site and/or Classes may not be
          available in every geography.
          {'\n'}
          {'\n'}PLEASE ENSURE YOU ARE VIEWING THE TERMS OF USE FOR THE COUNTRY IN WHICH YOU ARE
          LOCATED. THE COUNTRIES IN WHICH CLASSPASS OPERATES AND THE TERMS APPLICABLE TO EACH
          COUNTRY CAN BE FOUND HERE.
          {'\n'}
          {'\n'}ACCESS TO OUR SITE IS NOT PERMITTED FROM OTHER JURISDICTIONS. THESE TERMS ARE ONLY
          APPLICABLE TO USERS IN THE INDIAN ECONOMIC AREA. THE SITE IS NOT AVAILABLE TO ANY USERS
          SUSPENDED OR REMOVED FROM THE SITE BY CLASSPASS. BY USING THE SITE, YOU REPRESENT THAT YOU
          ARE RESIDENT OF THE INDIAN ECONOMIC AREA, AT LEAST 18 YEARS OLD AND HAVE NOT BEEN
          PREVIOUSLY SUSPENDED OR REMOVED. THOSE WHO CHOOSE TO ACCESS THE SITE DO SO AT THEIR OWN
          INITIATIVE AND ARE RESPONSIBLE FOR COMPLIANCE WITH ALL LOCAL RULES INCLUDING, WITHOUT
          LIMITATION, RULES ABOUT THE INTERNET, DATA, EMAIL OR OTHER ELECTRONIC MESSAGES, OR
          PRIVACY.
          {'\n'}
          {'\n'}j) Subscribing Organizations.If you are using or opening an account on behalf of a
          company, entity, or organization (a “Subscribing Organization”), then you represent and
          warrant that you are an authorized representative of that Subscribing Organization with
          the authority to bind such organization to these Terms; and agree to be bound by these
          Terms on behalf of such Subscribing Organization.
          {'\n'}
          {'\n'}
          <BoldText txt="3.Fees, Billing, Cancellation"></BoldText>
          {'\n'}
          {'\n'}a) Recurring Billing. By initiating your BrackettUp subscription, you authorize us
          to charge you for your initial subscription period and a recurring monthly subscription
          fee at the then current rate. Increases in the current rate will be notified to you by
          e-mail or other notice (such as when you log into your account). You acknowledge that the
          amount billed each month may vary for reasons that may include differing amounts due to
          promotional offers and/or changing or adding a plan, and you authorize us to charge your
          Payment Method for such varying amounts, which may be billed monthly in one or more
          charges. You also authorize us to charge you any other fees you may incur in connection
          with your use of the Site, such as any applicable sign-up fee or cancellation or late
          fees, as further explained below. Note that even if you do not use your subscription or
          access the Site and/or attend Classes, you will be responsible for subscription fees until
          you cancel your subscription, or it is otherwise terminated.
          {'\n'}
          {'\n'}b) Subscription Cycle. When you sign up and purchase your BrackettUp membership,
          your first Subscription Cycle will be billed immediately. Unless we expressly communicate
          otherwise, your subscription will automatically renew each month and you will be billed on
          the same date each month (being the date on which you signed up), provided that, where
          such date does not exist in a particular renewal month, your subscription will be deemed
          to auto-renew on the day immediately following the date of expiry of your current
          membership cycle. For example, if you signed up on January 31st, your next auto-renew date
          will be March 1st, and payment will be taken using your Payment Method on (or as soon as
          practically possible) after that date. All membership auto-renews will continue to take
          place on the new auto-renew date (i.e., in this example, the 1st of each month). Payment
          will be taken on the effective date of your auto-renew (a “Renewal Date”), provided that,
          if we are unable for any reason to take payment on a Renewal Date, we will take payment as
          soon as practically possible thereafter.
          {'\n'}
          {'\n'}c) Refunds. Generally, our fees (including the monthly fee for your membership and
          any other fees) are nonrefundable, unless we specifically communicate otherwise at the
          time of purchase. However, we will provide a refund to subscribers for their current
          prepaid period in the following circumstances: (i) if you are canceling as set forth in
          Section 3i below or (ii) if your subscription is cancelled prior to the end of a period
          for which you have incurred a charge, due to your relocation, disability or death;
          provided, however, in each case we reserve the right to charge a fee to cover the cost of
          any Class or other services or products you may have used or received prior to your
          cancellation and to ask for proof of such changed condition, to the extent permitted by
          law (such Class fee charges not to exceed the cost of the subscription itself). WE DO NOT
          PROVIDE REFUNDS OR MAKE GOOD FOR ANY PRIOR MONTHS INCLUDING FOR UNUSED CREDITS OR CLASSES.
          {'\n'}
          {'\n'}d) Price Changes. We reserve the right to adjust pricing at any time. Unless we
          expressly communicate otherwise, any price changes to your subscription will take effect
          on your next billing cycle upon notice communicated through a posting on the BrackettUp
          website or mobile applicable or such other means as we may deem appropriate from time to
          time, such as email. If you do not cancel your subscription, you will be deemed to have
          accepted these new fees.
          {'\n'}
          {'\n'}e) Payment Methods. You may edit your Payment Method information by logging onto our
          website or mobile app and editing it in your account settings. If a payment is not
          successfully settled, due to expiration, insufficient funds or otherwise, you nonetheless
          will remain responsible for any uncollected amounts and authorize us to continue billing
          the Payment Method or any other payment method you have provided, as it may be updated,
          including in the event you attempt to create a new account, reactivate the unsettled
          account or sign up for a new account. This may result in a change to your payment billing
          dates. If we cannot charge your account, we reserve the right, but are not obligated, to
          terminate your access to our Site or any portion thereof.
          {'\n'}
          {'\n'}f) Cancellation. Unless we communicate otherwise, and in addition to your right to
          cancel within 14 days of initial purchase as set out below, you may terminate your
          subscription at any time before your subscription renews, by going into your account
          settings on the BrackettUp website and letting us know you would like to cancel. Unless we
          communicate otherwise, and except for during a Trial, following any cancellation you will
          continue to have access to your subscription through the end of your current prepaid
          Subscription Cycle, unless you cancel and receive a refund, in which case your access will
          be terminated immediately. Note that if you do terminate your subscription, we reserve the
          right to charge a reactivation fee if you want to return to BrackettUp in future months or
          to restrict your access in future months.
          {'\n'}
          {'\n'}g) Other Fees. You are responsible for paying applicable fees if you do not cancel a
          Class with appropriate notice or do not attend your scheduled Class. Click here for our
          current cancellation and missed Class rules, including the applicable fees. We reserve the
          right to change the policy regarding when we charge fees, to introduce additional fees
          (such as a sign-up fee) and to change the amount of any such fees at any time.
          {'\n'}
          {'\n'}h) Reservation and Cancellation of Classes. As a BrackettUp user you must reserve
          and cancel your BrackettUp Classes only through the Site. Click here for our current
          cancellation and missed Class policy. It is a breach of these Terms if you reserve or
          cancel a service directly with a Venue, including through any online or mobile account you
          have with a Venue, independent of BrackettUp. If you reserve or cancel directly with such
          Venue, we reserve the right to charge you the full amount that the Venue charges for such
          class and/or any applicable cancellation fees, and/or to terminate your subscription.
          {'\n'}
          {'\n'}i) RIGHT TO CANCEL WITHIN 14 DAY OF INITIAL PURCHASE You have the right to cancel
          your subscription within 14 days of your initial sign-up without giving any reason.
          {'\n'}
          {'\n'}The cancellation period will expire after 14 days from the day of the conclusion of
          the contract. To exercise the right to cancel, you must inform us either at your option,
          by contacting us via classpass.com/contact or postal mail of your decision to cancel this
          contract by a clear statement. You may use the model cancellation form appended to the end
          of these Terms at Appendix 1, but it is not obligatory.
          {'\n'}
          {'\n'}Contact us here. Or by postal mail at 101 E. Front Street, Suite 202, Missoula, MT
          59802, Attention: BrackettUp Customer Support – Cancellation Notice.
          {'\n'}
          {'\n'}To meet the cancellation deadline, it is sufficient for you to send your
          communication concerning your exercise of the right to cancel before the cancellation
          period has expired.
          {'\n'}
          {'\n'}If you cancel this contract within the 14-day cancellation period, we will reimburse
          to you all payments received from you unless you have requested to begin your membership
          during the cancellation period.
          {'\n'}
          {'\n'}We will make the reimbursement without undue delay, and not later than 14 days after
          the day on which we are informed about your decision to cancel this contract.
          {'\n'}
          {'\n'}We will make the reimbursement using the same means of payment as you used for the
          initial transaction, unless you have expressly agreed otherwise; in any event, you will
          not incur any fees as a result of the reimbursement.
          {'\n'}
          {'\n'}If you requested to begin the performance of services during the cancellation
          period, you shall pay us an amount that is in proportion to what has been performed until
          you have communicated us your cancellation from this contract, in comparison with the full
          coverage of the contract.
          {'\n'}
          {'\n'}j) Fees Charged by Venues. In addition to fees we charge, Venues may also charge
          equipment or other amenity fees that you will be responsible for directly. For example,
          some Venues might charge extra to rent a yoga mat or cycling shoes. Further, BrackettUp
          only gives you access to the Class for which you signed up on the Site (and at the
          specified time and location). The Venue may have additional fees for use of additional
          classes or spaces.
          {'\n'}
          {'\n'}k) Third Party Fees for Using BrackettUp. You are also responsible for all
          third-party charges and fees associated with connecting to and using the Site and/or
          Classes, including fees such as internet service provider fees, telephone and computer
          equipment charges, and any other fees necessary to access the Site and/or Classes.
          {'\n'}
          {'\n'}
          <BoldText txt="4.Promotions"></BoldText>
          {'\n'}
          {'\n'}a) Trials. From time to time we may offer a trial membership that includes access to
          the BrackettUp platform during the trial period. The Classes, content and features
          available during your Trial may differ from those available during subsequent Subscription
          Cycles. Trials will have the duration and price communicated at the time you sign up.
          Unless otherwise communicated, a trial begins at the moment of sign up (even if you choose
          not to take your first Class until a later date) and ends at 11:59pm local time on the
          last day of the trial (for a one-week trial, this would be the same weekday of following
          week). If you cancel your Trial, your cancellation will be processed and your Trial period
          will end immediately, your credits will expire, and your upcoming reservations will be
          cancelled, unless we communicate otherwise. Each trial membership automatically will
          convert to a regular monthly subscription and price unless canceled by 12pm local time on
          the day before the last day of trial. Customers that cancel and do not convert to a
          regular subscription may not attend Classes taking place after the end of the trial
          membership period (even if booking occurred before the end of the applicable trial
          period). Trials, discount offers, and promotions (collectively “Trials”) may be redeemed
          as described in the specifics of the Trials and may be subject to additional or different
          terms. Unless we expressly communicate otherwise, Trials are not transferable, may not be
          combined with other offers or redeemed for cash and are void where prohibited. You
          understand and agree that unless we expressly communicate otherwise, Trials are available
          only to new users that have never had a BrackettUp account before and there is only one
          Trial permitted per credit card or payment method and it is a violation of these Terms to
          sign up for a Trial if you have signed up for an account or Trial in the past or to have
          more than one account or Trial at the same time. BrackettUp reserves the right, in its
          absolute discretion, to determine your eligibility for a Trial. If in our discretion we
          believe you are not eligible for a Trial, we reserve the right to prevent you from signing
          up for a Trial or to terminate your promotional subscription. If we terminate your Trial
          because you have violated these Terms, you understand that you will not be eligible for a
          refund.
          {'\n'}
          {'\n'}b) Gift Cards. From time to time we may make available gift cards for BrackettUp
          membership. The current terms that apply to gift cards can be found here. Other than
          gifting a gift card as described in the gift card terms, you may not gift Experience or
          credits to the third parties and your use of BrackettUp is personal to you.
          {'\n'}
          {'\n'}c) Refer a Friend. From time to time we may make available certain incentives for
          BrackettUp users to refer a friend to use BrackettUp. The current terms that apply to
          referrals can be found here.
          {'\n'}
          {'\n'}d) Other Promotions. BrackettUp may offer additional types of offers and promotions
          which will be subject to additional terms and conditions that BrackettUp may provide.
          {'\n'}
          {'\n'}
          <BoldText txt="5.Termination or Modification by BrackettUp"></BoldText>
          {'\n'}
          {'\n'}You agree that BrackettUp may, in its sole discretion and at any time (i) terminate,
          cancel, deactivate, disable, delete and/or suspend any account, subscription, any orders
          placed, your access to or use of the Site, your membership and/or Classes (or any part
          thereof including but not limited to your access to any or all Venues, credits or Classes
          or services) you may have with BrackettUp and remove and discard all or any part of your
          account or any content uploaded by you and/or (ii) discontinue, disable, suspend, modify
          or alter any aspect, feature or policy of the Site including of your subscription in the
          event that you are in breach of these Terms or otherwise.
          {'\n'}
          {'\n'}BrackettUp may also in its sole discretion and at any time discontinue providing
          access to the Site, or any part thereof, without reason or notice to you. We further
          reserve the right to terminate your access to the Site or any account you may have or
          portion thereof without prior notice. This includes the right to terminate or modify any
          subscription prior to the end of any pre-paid or committed period.
          {'\n'}
          {'\n'}Upon any termination or cancellation of your subscription by BrackettUp, we may
          immediately deactivate your account and all related information and/or bar any further
          access to your account information and the Site and you shall have no recourse for, any
          such termination or deactivation.
          {'\n'}
          {'\n'}If you are a subscriber and we have terminated or cancelled your subscription or
          access to the Site, without cause then upon any such termination by us we will issue you a
          pro rata refund of the prepaid portion of your subscription applicable to future unused
          services (less any fees or costs for Classes or services already used). If we determine
          that you have violated these Terms or otherwise engaged in illegal or improper use of your
          membership, Classes and/or the Site, you will not be entitled to any refund and you agree
          that we will not be responsible to pay any such refund. You agree that BrackettUp will not
          be liable to you or any third party for any such termination.
          {'\n'}
          {'\n'}In the event that we amend any of these Terms (or Additional Terms) and you do not
          accept such amendment or we are modifying or discontinuing the services and you no longer
          wish to continue with your subscription for that reason, you acknowledge that your only
          right with respect to any amendment or dissatisfaction with any modification or
          discontinuation of service made by us is to cancel or terminate your subscription. If
          BrackettUp deletes your account for these reasons, you may not re-register for or use the
          Site and/or Classes under any other user name, email, payment method or profile.
          BrackettUp may block your access to the Site to prevent re-registration.
          {'\n'}
          {'\n'}
          <BoldText txt="6.Privacy"></BoldText>
          {'\n'}
          {'\n'}Your privacy is important to BrackettUp. The BrackettUp Privacy Policy is hereby
          incorporated into these Terms by reference. Please read the privacy policy carefully for
          information relating to BrackettUp’s collection, use, and disclosure of your personal
          information.
          {'\n'}
          {'\n'}
          <BoldText txt="7.Prohibited Conduct"></BoldText>
          {'\n'}
          {'\n'}Without limiting the prohibitions and restrictions found elsewhere throughout the
          Terms, you agree not to:
          {'\n'}
          {'\n'}Harass, threaten, stalk, disrupt or defraud users, members or staff of BrackettUp or
          Venues or any other person, or otherwise create or contribute to an unsafe, harassing,
          threatening or disruptive environment;
          {'\n'}
          {'\n'}Act in a deceptive or fraudulent manner by, among other things, impersonating
          another person or access another user’s account or signing up for more than one account;
          {'\n'}
          {'\n'}Share BrackettUp passwords with any third party or encourage any other user to do
          so;
          {'\n'}
          {'\n'}Permit anyone to use any classes or services booked under your own membership,
          including other members;
          {'\n'}
          {'\n'}Reserve or cancel any Class directly with a Venue, rather than through the Site;
          {'\n'}
          {'\n'}Reproduce, modify, prepare derivative works based upon, distribute, license, lease,
          sell, resell, transfer, publicly display, publicly perform, transmit, stream, broadcast,
          use for commercial purposes or otherwise exploit any portion of the Site;
          {'\n'}
          {'\n'}Misrepresent the source, identity, or content of information transmitted via the
          Site, including deleting the copyright or other proprietary rights or notices from any
          portion of the Site;
          {'\n'}
          {'\n'}Upload material (e.g. virus) that is damaging to computer systems or data of
          BrackettUp or users of the Site or otherwise use the Site in any manner that could damage,
          disable, overburden, or impair it or interfere with any other party’s use and enjoyment of
          the Site;
          {'\n'}
          {'\n'}Upload copyrighted material that is not your own or that you do not have the legal
          right to distribute, display, and otherwise make available to others;
          {'\n'}
          {'\n'}Upload or send to Site users pornographic, threatening, embarrassing, hateful,
          racially or ethnically insulting, libelous, or otherwise inappropriate content;
          {'\n'}
          {'\n'}Decompile, reverse engineer or disassemble the Site, in whole or in part, except as
          may be permitted by applicable law;
          {'\n'}
          {'\n'}Link to, mirror or frame any portion of the Site;
          {'\n'}
          {'\n'}Cause or launch any programs or scripts for the purpose of scraping, indexing,
          surveying, or otherwise data mining any portion of the Site or unduly burdening or
          hindering the operation and/or functionality of any aspect of the Site;
          {'\n'}
          {'\n'}Attempt to gain unauthorized access to or impair any aspect of the Site or its
          related systems or networks or interfere or attempt to interfere with the proper working
          of the Site or any activities conducted on the Site;
          {'\n'}
          {'\n'}Make unsolicited offers, advertisements, proposals, or send junk mail or “spam” to
          users;
          {'\n'}
          {'\n'}Remove, circumvent, disable, damage or otherwise interfere with security-related
          features of the Site, any features that prevent or restrict use or copying of any content
          accessible through the Site, or any features that enforce limitations on the use of the
          Site or the content therein;
          {'\n'}
          {'\n'}Obtain or attempt to obtain any materials or information through any means not
          intentionally made available through the Site;
          {'\n'}
          {'\n'}Modify the Site in any manner or form, nor to use modified versions of the Site,
          including (without limitation) for the purpose of obtaining unauthorized access to the
          Site;
          {'\n'}
          {'\n'}Use any robot, spider, scraper, or other automated means to access the Site for any
          purpose without our express written permission or bypass our robot exclusion headers or
          other measures we may use to prevent or restrict access to the Site;
          {'\n'}
          {'\n'}Use the Site for or in connection with any purpose that is unlawful or prohibited by
          these Terms.
          {'\n'}
          {'\n'}BrackettUp reserves the right to refuse service, terminate accounts, remove or edit
          content, or cancel orders in its sole discretion.
          {'\n'}
          {'\n'}
          <BoldText txt="8.User Submissions"></BoldText>
          {'\n'}
          {'\n'}a) General. The Site provides certain features which enable you and other users to
          submit, post, share and search for content and information, which may include (without
          limitation) text, graphic and pictorial works, profile information, information about
          reserved or attended classes, friend connections or any other information submitted by you
          and other users or arising from your use of the Site (“User Submissions”). User
          Submissions also include reviews, ratings and other feedback (“Reviews”). We strongly
          recommend that you think carefully about what you upload to, share with or make accessible
          to the Site. BrackettUp does not guarantee any anonymity or confidentiality with respect
          to any User Submissions. For information on how we use your personal information, please
          see our Privacy Policy.
          {'\n'}
          {'\n'}b) Reviews. You understand and agree that Reviews may be made public without any
          additional notice to or consent by you and you should assume that any person (whether or
          not a user of BrackettUp’ platform), including any Venue, may read or have access to your
          Reviews. BrackettUp is not responsible for the use or disclosure of any information that
          you disclose in connection with Reviews, including any personal information. Reviews are
          displayed for information purposes only and reflect the opinions of the person making the
          submission. They are not controlled by, and may not reflect the opinion of, BrackettUp.
          You understand that all Reviews are the sole responsibility of the person from whom such
          Review originated. This means that you, and not BrackettUp, are entirely responsible for
          all Reviews that you upload, post, e-mail, transmit, or otherwise make available through
          the Site.
          {'\n'}
          {'\n'}c) Right to Remove or Edit User Submissions. BrackettUp makes no representations
          that it will publish or make available on the Site any User Submissions, and reserves the
          right, in its sole discretion, to refuse to allow any User Submissions on the Site, or to
          edit or remove any User Submission at any time with or without notice. BrackettUp may, but
          is not obligated to, monitor and edit or remove any activity or content, in whole or in
          part, including but not limited to content that BrackettUp determines in its sole
          discretion violates the standards of this Site, including but not limited to content that
          is in breach of Section 7 (Prohibited Conduct). BrackettUp takes no responsibility and
          assumes no liability for any User Submissions.
          {'\n'}
          {'\n'}d) License Grant by You to BrackettUp. By accessing and/or using our services, you
          hereby grant BrackettUp and its affiliates, sublicensees, partners, designees, and
          assignees of the Site (collectively, the “BrackettUp Licensees”) a worldwide,
          non-exclusive, fully paid-up, royalty-free, perpetual, irrevocable, sublicensable, and
          transferable license to use, reproduce (including by making mechanical reproductions),
          distribute, modify, adapt, translate, prepare derivative works of, publicly display,
          publish, publicly perform, and otherwise exploit your User Submissions and derivatives
          thereof in connection with the Site and BrackettUp’s (and its successors’) business for
          any purpose, including, without limitation, for marketing, promoting, and redistributing
          part or all of the Site (and derivative works thereof), in any media formats and through
          any media channels now known or hereafter discovered or developed. You acknowledge that
          you may have what are known as “moral rights” in your User Submissions, for example the
          right to be named as the creator and the right not to have work subjected to derogatory
          treatment. You agree to waive any such moral rights you may have in User Submissions.
          {'\n'}
          {'\n'}e) User Submissions Representations and Warranties. You are solely responsible for
          your own User Submissions and the consequences of your posting, sharing, displaying,
          publishing them or otherwise making them available. In connection with User Submissions,
          you affirm, represent, and warrant that: {'\n'}(i) you own, or have the necessary
          licenses, rights, consents, and permissions to use and authorize BrackettUp to use all
          patent, trademark, copyright, or other proprietary rights in and to your User Submissions
          to enable inclusion and use of your User Submissions in accordance with these Terms, and
          to grant the rights and license set forth above, and{'\n'}(ii) your User Submissions,
          BrackettUp’s or any BrackettUp Licensee’s use of such User Submissions pursuant to these
          Terms, and BrackettUp’s or any of BrackettUp Licensee’s exercise of the license rights set
          forth above, do not and will not: {'\n'}(a) infringe, violate, or misappropriate any
          third-party right, including any copyright, trademark, patent, trade secret, moral right,
          privacy right, right of publicity, or any other intellectual property or proprietary
          right; {'\n'}(b) contain any material that is illegal, threatening, obscene, racist,
          defamatory, libelous, hateful, pornographic, purposely false or otherwise injurious to
          third parties, promotional in nature, promotes any illegal activity or harm to groups or
          individuals, or consists of or contain software, computer viruses, commercial
          solicitation, political campaigning, chain letters, mass mailings, any form of “spam” or
          references to illegal activity, malpractice or false advertising; {'\n'}(c) violate these
          Terms or these Terms ; or {'\n'}(d) exploits minors or {'\n'}(e) require obtaining a
          license from or paying fees or royalties to any third party for the exercise of any rights
          granted in these Terms, including, by way of example and not limitation, the payment of
          any royalties to any copyright owners, including any royalties to any agency, collection
          society, or other entity that administers such rights on behalf of others.
          {'\n'}
          {'\n'}f) Inaccurate or Offensive User Submissions. You understand that when using the
          Site, you may be exposed to User Submissions from a variety of sources and that BrackettUp
          does not endorse and is not responsible for the accuracy, usefulness, safety, or
          intellectual property rights of or relating to such User Submissions. You further
          understand and acknowledge that you may be exposed to User Submissions that are
          inaccurate, offensive, indecent, or objectionable. YOU ACKNOWLEDGE AND AGREE, TO THE
          FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THAT NEITHER CLASSPASS (NOR ANY MEMBER OF THE
          CLASSPASS GROUP OF COMPANIES (WHICH INCLUDES CLASSPASS INC. (USA) AND ANY SUBSIDIARY OF
          SUCH ENTITY), HAS ANY LIABILITY TO YOU IN RESPECT OF ANY SUCH USER SUBMISSIONS EXCEPT TO
          THE EXTENT THAT THEY ARE USED OUTSIDE THE SCOPE OF PERMITTED PURPOSE, I.E. UNAUTHORISED
          USE.
          {'\n'}
          {'\n'}g) Feedback. If you provide BrackettUp with any comments, bug reports, feedback, or
          modifications proposed or suggested by you to the Site (“Feedback”), BrackettUp shall have
          the right to use such Feedback at its discretion, including, but not limited to the
          incorporation of such suggested changes into the Site. You hereby grant BrackettUp a
          perpetual, irrevocable, nonexclusive license under all rights necessary to incorporate and
          use your Feedback for any purpose without notice to, consent by or compensation to you or
          any third party.
          {'\n'}
          {'\n'}h) Infringing or Illegal Activity. In the event of infringing or other illegal
          activities, we have no obligation to, but reserve the right to terminate access to the
          Site and remove all content submitted by any persons who are found to be infringers. Any
          suspected illegal activity may be referred to appropriate law enforcement authorities.
          These remedies are in addition to any other remedies BrackettUp may have at law or in
          equity.
          {'\n'}
          {'\n'}i) Class Ratings. You may be required to rate your Classes and/or other BrackettUp
          experiences that you reserve.
          {'\n'}
          {'\n'}j) Advertising. You give us permission to use and display your User Submissions next
          to or in connection with ads, offers, and other messages to your BrackettUp friends,
          without any compensation or advance notice. We may, for example, send an email to one of
          your BrackettUp friends to encourage them to join you in a class. You can update your
          preferences at any time by navigating to the Privacy Settings.
          {'\n'}
          {'\n'}
          <BoldText txt="9.Ownership; Proprietary Rights"></BoldText>
          {'\n'}
          {'\n'}The BrackettUp website and mobile applications are owned and operated by the
          BrackettUp group of companies. The content, recordings, visual interfaces, graphics,
          design, compilation, information, computer code, products, software (including any
          downloadable software), services, and all other elements of the Site provided by
          BrackettUp (“Materials”) are protected by local copyright, trade dress, patent, and
          trademark laws, international conventions, and all other relevant intellectual property
          and proprietary rights, and applicable laws. Except for your User Submissions, all
          Materials contained on the Site are the copyrighted property of BrackettUp or its
          subsidiaries or affiliated companies and/or third-party licensors whether registered or
          unregistered and may not be used in connection with any product or service or in any
          manner that is likely to cause confusion as to our endorsement, affiliation or sponsorship
          of any person, product or service. All trademarks, service marks, and trade names used by
          us on the Site are proprietary to BrackettUp or its affiliates and/or third-party
          licensors. Except as expressly authorized by BrackettUp, you agree not to sell, license,
          distribute, copy, modify, publicly perform or display, transmit, publish, edit, adapt,
          create derivative works from, or otherwise make unauthorized use of the Materials and may
          only access the Materials for your personal, non-commercial use. In the event that
          Materials are downloaded to your computer or mobile phone, you do not obtain any ownership
          interest in such Materials. All rights not expressly granted in this Agreement are
          reserved.
          {'\n'}
          {'\n'}
          <BoldText txt="10.Third-party Sites, Products and Services;"></BoldText>
          {'\n'}
          {'\n'}The Site may include links to other web sites or services (“Linked Sites”) solely as
          a convenience to users. BrackettUp does not endorse any such Linked Sites or the
          information, material, products, or services contained on other linked sites or accessible
          through other Linked Sites. Furthermore, BrackettUp makes no express or implied warranties
          with regard to the information, material, products, or services that are contained on or
          accessible through linked sites. ACCESS AND USE OF LINKED SITES, INCLUDING THE
          INFORMATION, MATERIAL, PRODUCTS, AND SERVICES ON LINKED SITES OR AVAILABLE THROUGH LINKED
          SITES, IS SOLELY AT YOUR OWN RISK.
          {'\n'}
          {'\n'}Sometimes promotional plans are offered in conjunction with the provision of third
          party products and services. We are not responsible for the products and services provided
          by such third parties, and use of such products and services is at your own risk.
          {'\n'}
          {'\n'}Your correspondence or business dealings with, or participation in promotions of,
          third parties found on or through the Site are solely between you and such third party.
          YOU AGREE THAT CLASSPASS WILL NOT BE RESPONSIBLE OR LIABLE FOR ANY LOSS OR DAMAGE OF ANY
          SORT INCURRED AS THE RESULT OF ANY SUCH DEALINGS OR AS THE RESULT OF THE PRESENCE OF SUCH
          THIRD PARTY ON THE SITE.
          {'\n'}
          {'\n'}
          <BoldText txt="11.DISCLAIMERS"></BoldText>
          {'\n'}
          {'\n'}CLASSES AND ANY OTHER PRODUCTS AND SERVICES MADE AVAILABLE VIA THE SITE ARE PROVIDED
          BY THIRD PARTIES (AND THE DESCRIPTIONS OF THE FOREGOING POSTED ON THE SITE ARE PROVIDED BY
          SUCH THIRD PARTIES), NOT CLASSPASS. YOU AGREE THAT YOUR USE OF THE SITE AND ATTENDANCE AT,
          PARTICIPATION IN, PURCHASE AND/OR USE OF ANY CLASSES IS SOLELY AT YOUR OWN RISK. WE DO NOT
          ASSUME ANY LIABILITY OR MAKE ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, ARISING OUT
          OF, IN CONNECTION WITH OR WITH RESPECT TO THE SITE AND/OR CLASSES.
          {'\n'}
          {'\n'}IN NO EVENT SHALL CLASSPASS BE LIABLE FOR ANY INJURY, LOSS, CLAIM, DAMAGE OR ANY
          SPECIAL, EXEMPLARY, PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES OF ANY KIND, WHETHER
          BASED IN CONTRACT, TORT OR OTHERWISE, WHICH ARISES OUT OF OR IS ANY WAY CONNECTED WITH A
          USER’S ATTENDANCE, USE OF OR PARTICIPATION IN A CLASS, OR PRODUCT, OR THE PERFORMANCE OR
          NON-PERFORMANCE OF ANY THIRD PARTY. CLASSPASS PROVIDES ACCESS TO STUDIOS' CLASSES.
          CLASSPASS IS NOT OTHERWISE CONNECTED TO, NOR IS AN AGENT OF ANY THIRD PARTY WITH WHICH A
          USER HAS MADE A RESERVATION. THE VENUE IS SOLELY RESPONSIBLE FOR THEIR INTERACTIONS WITH
          YOU AND ANY AND ALL CLAIMS, INJURIES, ILLNESSES, DAMAGES, LIABILITIES, AND COSTS SUFFERED
          BY YOU AS A RESULT OF YOUR INTERACTION WITH OR VISIT TO OR PARTICIPATION IN A CLASS SHOULD
          BE DIRECTLY MADE AGAINST THE VENUE.WITHOUT LIMITING ANYTHING HEREIN, CLASSPASS DISCLAIMS
          ALL WARRANTIES, WHETHER STATUTORY, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
          IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, RELATED TO ANY
          CLASSES, ACTIVITIES, OR OTHER SERVICES OFFERED BY STUDIOS VIA THE SITE.
          {'\n'}
          {'\n'}CLASSPASS HAS TRIED TO ENSURE THAT THE CONTENT POSTED ON THE SITE, INCLUDING WITHOUT
          LIMITATION, THE TEXT, DATA, SOFTWARE, SCRIPTS, GRAPHICS, PHOTOS, COMMENTARY, VENUE AND
          CLASS DESCRIPTIONS, AND OTHER FEATURES AND MATERIALS ("CONTENT") IS CORRECT AT THE TIME OF
          PUBLICATION.
          {'\n'}
          {'\n'}TO THE FULLEST EXTENT PERMISSIBLE BY LAW, CLASSPASS DISCLAIMS ALL LIABILITY AND
          RESPONSIBILITY ARISING FROM ANY ERRORS, OMISSIONS OR INACCURATE INFORMATION IN SUCH
          CONTENT AND/OR RELIANCE PLACED ON SUCH CONTENT AND ALL TERMS, REPRESENTATIONS, CONDITIONS
          OR WARRANTIES THAT MIGHT OTHERWISE BE IMPLIED IN THESE TERMS ARE HEREBY EXCLUDED. CONTENT
          IN RESPECT OF THE CLASSES AND VENUES IS BASED ON INFORMATION PROVIDED TO US BY THE VENUES,
          SO PLEASE ALSO CONTACT THE VENUES DIRECTLY OR VISIT THEIR WEBSITE FOR FURTHER INFORMATION
          ABOUT THE VENUE AND/OR CLASS.
          {'\n'}
          {'\n'}UNLESS OTHERWISE EXPRESSLY STATED BY CLASSPASS, ALL ASPECTS OF OR CONTENT OR
          FEATURES MADE AVAILABLE THROUGH THE SITE AND/OR CLASSES ARE PROVIDED “AS IS” AND “AS
          AVAILABLE” AND WE DISCLAIM AND DO NOT ACCEPT ANY LIABILITY TO YOU IN RESPECT OF IT OR
          OTHERWISE. IT IS YOUR RESPONSIBILITY TO ENSURE THAT THE SITE AND SERVICES OFFERED VIA THE
          SITE ("SERVICES") ARE SUITABLE FOR YOUR INTENDED PURPOSES. WE ACCEPT NO LIABILITY AS TO
          THE SUITABILITY OR FITNESS OF THE SITE OR SERVICES IN MEETING YOUR NEEDS AND WE EXCLUDE TO
          THE FULLEST EXTENT PERMISSIBLE BY LAW ALL EXPRESS OR IMPLIED WARRANTIES, REPRESENTATIONS,
          CONDITIONS OR TERMS, INCLUDING, WITHOUT LIMITATION: {'\n'}(I) THAT THE SITE AND /OR ANY
          CLASSES ARE SUTIABLE FOR YOU OR WILL MEET YOUR PERSONAL NEEDS, {'\n'}(II) REGARDING THE
          ADEQUACY OR SAFETY OF ANY CLASS OR RECOMMENDATION, {'\n'}(III) THAT THE SITE AND/OR ANY
          CLASS, OR ANY ASPECT THEREOF,WILL BE AVAILABLE OR PERMITTED IN YOUR JURISDICTION, {'\n'}
          (IV) THAT THE SITE, OR ANY ASPECT THEREOF WILL BE UNINTERRUPTED OR ERROR-FREE, THAT
          DEFECTS WILL BE CORRECTED, OR THAT THE SITE AND ANY DOWNLOADABLE SOFTWARE, CONTENT,
          SERVICES, OR APPLICATIONS MADE AVAILABLE IN CONJUNCTION WITH OR THROUGH THE SITE OR THE
          SERVER THAT MAKES THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR{' '}
          {'\n'}(V) REGARDING THE USE OF THE SITE AND ANY DOWNLOADABLE SOFTWARE, CONTENT, SERVICES,
          OR APPLICATIONS MADE AVAILABLE IN CONJUNCTION WITH OR THROUGH THE SITE IN TERMS OF
          CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE.
          {'\n'}
          {'\n'}YOU UNDERSTAND AND AGREE ANY MATERIAL OR DATA THAT YOU DOWNLOAD OR OTHERWISE OBTAIN
          THROUGH THE USE OF THE SITE IS AT YOUR OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY
          RESPONSIBLE FOR ANY INJURY, LOSS OR DAMAGES, INCLUDING DAMAGE TO YOUR COMPUTER SYSTEM OR
          LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF SUCH MATERIAL OR DATA UNLESS THIS IS DUE TO
          CLASSPASS' FAILURE TO EXERCISE REASONABLE SKILL AND CARE.
          {'\n'}
          {'\n'}
          <BoldText txt="12.Liability in respect of Classes and fitness related information"></BoldText>
          {'\n'}
          {'\n'}YOU UNDERSTAND THAT CLASSPASS IS NOT A GYMNASIUM, PLACE OF AMUSEMENT OR RECREATION,
          HEALTH CLUB, FACILITY, FITNESS STUDIO OR SIMILAR ESTABLISHMENT AND THE CLASSES THEY
          PROVIDE ARE OPERATED AND DELIVERED BY THE APPLICABLE VENUE AND NOT BY CLASSPASS.CLASSPASS
          IS NOT RESPONSIBLE FOR THE QUALITY OF ANY CLASS PROVIDED BY A VENUE OR THIRD PARTY
          (INCLUDING BUT NOT LIMITED TO THE FACILITY, INSTRUCTOR OR CURRICULUM). YOU ARE SOLELY
          RESPONSIBLE FOR DETERMINING WHETHER THE CLASS OR RECOMMENDATIONS AVAILABLE ON OR THROUGH
          THE SITE AND/OR CLASSES ARE RIGHT FOR YOU.
          {'\n'}
          {'\n'}YOU UNDERSTAND THAT THERE ARE CERTAIN INHERENT RISKS AND DANGERS IN EXERCISING AND
          THAT THE CLASSES YOU MAY ATTEND OR PARTICIPATE IN OFFER A RANGE OF ACTIVITY AND INTENSITY
          LEVELS. BY USING CLASSPASS (INCLUDING BUT NOT LIMITED TO ATTENDING, PARTICIPATING IN OR
          USING A CLASS), YOU ACKNOWLEDGE AND AGREE, THAT YOU ARE AWARE OF THESE RISKS WHICH
          INCLUDE, BUT ARE NOT LIMITED TO, PROPERTY DAMAGE, ILLNESS, LOSS AND BODILY INJURY OR
          DEATH. YOU ACKNOWLEDGE THAT SOME OF THESE RISKS CANNOT BE ELIMINATED AND YOU SPECIFICALLY
          ASSUME THE RISK OF INJURY OR HARM.
          {'\n'}
          {'\n'}YOU ACKNOWLEDGE AND AGREE THAT IT IS YOUR RESPONSIBILITY TO CONSULT WITH YOUR
          PHYSICIAN OR OTHER HEALTH CARE PROFESSIONAL PRIOR TO USING CLASSPASS (INCLUDING BUT NOT
          LIMITED TO ATTENDING, PARTICIPATING IN OR USING A CLASS) AND TO DETERMINE IF AND HOW
          PARTICIPATING IS APPROPRIATE FOR YOU. DO NOT USE CLASSES IF YOUR PHYSICIAN OR HEALTH CARE
          PROVIDER ADVISES AGAINST IT. IF YOU EXPERIENCE FAINTNESS, DIZZINESS, PAIN OR SHORTNESS OF
          BREATH AT ANY TIME WHILE EXERCISING, YOU SHOULD STOP IMMEDIATELY.
          {'\n'}
          {'\n'}YOU ALSO UNDERSTAND AND AGREE THAT THE SITE OFFERS FITNESS AND RELATED INFORMATION
          THAT IS DESIGNED FOR INFORMATIONAL, EDUCATIONAL AND ENTERTAINMENT PURPOSES ONLY. NOTHING
          STATED OR POSTED ON OR OTHERWISE AVAILABLE THROUGH ANY ASPECT OF THE SITE IS INTENDED TO
          BE, AND MUST NOT BE TAKEN TO BE, THE PRACTICE OF MEDICAL, PROFESSIONAL OR COUNSELING CARE.
          YOU SHOULD NOT RELY ON ANY INFORMATION ON OR THROUGH THE SITE AS A SUBSTITUTE FOR, NOR
          DOES IT REPLACE, PROFESSIONAL MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT. IF YOU HAVE ANY
          CONCERNS OR QUESTIONS ABOUT YOUR HEALTH OR FITNESS LEVEL, YOU SHOULD ALWAYS CONSULT A
          PHYSICIAN OR OTHER HEALTH-CARE PROFESSIONAL. DO NOT EVER DISREGARD, AVOID OR DELAY
          OBTAINING MEDICAL OR HEALTH RELATED ADVICE FROM YOUR HEALTH-CARE PROFESSIONAL BECAUSE OF
          SOMETHING YOU MAY HAVE READ OR HEARD ON OR THROUGH THE SITE AND/OR A CLASS. THE USE OF ANY
          OF THE CONTENT, RECOMMENDATIONS AND INFORMATION PROVIDED ON OR THROUGH CLASSPASS IS SOLELY
          AT YOUR OWN RISK.
          {'\n'}
          {'\n'}THE SITE IS CONTINUALLY UNDER DEVELOPMENT AND CLASSPASS MAKES NO WARRANTY OF ANY
          KIND, IMPLIED OR EXPRESS, AS TO ITS ACCURACY, COMPLETENESS OR APPROPRIATENESS FOR ANY
          PURPOSE. IN THAT REGARD, DEVELOPMENTS IN RESEARCH MAY IMPACT THE FITNESS OR RELATED ADVICE
          THAT APPEARS ON OR IN CONNECTION WITH THE SITE. NO ASSURANCE CAN BE GIVEN THAT THE ADVICE
          OR RECOMMENDATIONS CONTAINED IN OR THROUGH THE SITE AND/OR A CLASS WILL ALWAYS INCLUDE THE
          MOST RECENT FINDINGS OR DEVELOPMENTS WITH RESPECT TO THE PARTICULAR MATERIAL OR TOPIC.
          {'\n'}
          {'\n'}
          <BoldText txt="13.Limitation of Liability and Damages"></BoldText>
          {'\n'}
          {'\n'}NOTHING IN THESE TERMS (INCLUDING BUT NOT LIMITED TO THE “DISCLAIMERS” ABOVE AND
          LIMITATIONS OF LIABILITY BELOW) IS INTENDED TO EXCLUDE OR LIMIT ANY LIABILITY THAT WE MAY
          HAVE TO YOU BY OPERATION OF APPLICABLE LAW. THIS INCLUDES LIABILITY FOR DEATH OR PERSONAL
          INJURY ARISING FROM OUR NEGLIGENCE, OR OUR FRAUD OR FRAUDULENT MISREPRESENTATION.
          {'\n'}
          {'\n'}WE ACCEPT NO LIABILITY FOR THE NEGLIGENCE OF THIRD PARTIES, INCLUDING ANY VENUE
          WHERE YOU MAY REDEEM ELIGIBLE CLASSES. ADVICE ABOUT YOUR LEGAL RIGHTS IS AVAILABLE FROM
          YOUR LOCAL CITIZENS' ADVICE BUREAU OR TRADING STANDARDS OFFICE.
          {'\n'}
          {'\n'}UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, WILL CLASSPASS OR
          ITS AFFILIATES, CONTRACTORS, EMPLOYEES, AGENTS, OR THIRD-PARTY PARTNERS OR SUPPLIERS BE
          LIABLE FOR ANY SPECIAL, INDIRECT, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY
          DAMAGES ARISING FROM OR RELATED TO THE USE OF THE SITE, INCLUDING THOSE THAT RESULT FROM
          THE USE OR THE INABILITY TO USE THE MATERIALS ON THE SITE, OR ANY OTHER INTERACTIONS WITH
          CLASSPASS, EVEN IF CLASSPASS OR A CLASSPASS AUTHORIZED REPRESENTATIVE HAS BEEN ADVISED OF
          THE POSSIBILITY OF SUCH DAMAGES. APPLICABLE LAW MAY NOT ALLOW THE LIMITATION OR EXCLUSION
          OF LIABILITY OR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION
          MAY NOT APPLY TO YOU. IN SUCH CASES, CLASSPASS’S LIABILITY WILL BE LIMITED TO THE FULLEST
          EXTENT PERMITTED BY APPLICABLE LAW.
          {'\n'}
          {'\n'}
          <BoldText txt="14.Venue Waivers and Terms"></BoldText>
          {'\n'}
          {'\n'}Members taking Classes are deemed to agree to the liability waivers and terms of
          individual Venues. Your participation in any Class may be subject to additional policies,
          rules or conditions of the applicable Venue and you understand and agree that you may not
          be permitted to reserve or attend classes or services if you do not comply with these
          Terms or the policies of the Venues or as otherwise determined by a Venue. If you have
          questions about a Venue’s waiver or other terms, please see the applicable Venue’s website
          or contact the Venue directly. A Venue may ask or require that you provide it with
          information in order for you to participate in a Class. You understand and agree that
          BrackettUp is not responsible for any use of such information by the Venue or otherwise.
          {'\n'}
          {'\n'}
          <BoldText txt="15.Dispute Resolution"></BoldText>
          {'\n'}
          {'\n'}Generally, if a dispute arises between BrackettUp and you, our goal is to provide
          you with a neutral and cost effective means of resolving the dispute quickly. Accordingly,
          you and BrackettUp agree that the parties will resolve any claim or controversy at law or
          equity that arises out of this Agreement or the Site (a “Claim”) in accordance with one of
          the subsections below or as you and we otherwise agree in writing. Before resorting to
          these alternatives, we strongly encourage you to first contact us directly to seek a
          resolution. We will consider reasonable requests to resolve the dispute through
          alternative dispute resolution procedures, such as mediation or arbitration, as
          alternatives to litigation.
          {'\n'}
          {'\n'}
          <BoldText txt="16.Miscellaneous"></BoldText>
          {'\n'}
          {'\n'}a) Choice of Law; Forum. These Terms shall be governed in all respects by the laws
          of the State of New York, United States of America, without regard to their conflict of
          law provisions. You agree that any claim or dispute you may have against BrackettUp must
          be resolved by a court located in the State of New York, United States of America, except
          as otherwise agreed by the parties. You agree to submit to the personal jurisdiction of
          the courts located within the State of New York, United States of America, for the purpose
          of litigating all such claims or disputes.
          {'\n'}
          {'\n'}b) Assignment. We may assign, transfer, novate or subcontract all of our rights
          and/or obligations under these Terms to any company, firm or person at any time without
          consent. The Terms will inure to the benefit of our successors, assigns and licensees.
          {'\n'}
          {'\n'}c) Severability. If any provision of these Terms shall be unlawful, void, or for any
          reason unenforceable, then that provision will be deemed severable from these Terms and
          will not affect the validity and enforceability of any remaining provisions.
          {'\n'}
          {'\n'}d) Headings. The heading references herein are for convenience purposes only, do not
          constitute a part of these Terms, and will not be deemed to limit or affect any of the
          provisions hereof.
          {'\n'}
          {'\n'}e) Entire Agreement. This (including the documents referred to herein), as each may
          be amended as set forth herein, is the entire agreement between you and BrackettUp
          relating to the subject matter herein.
          {'\n'}
          {'\n'}g) Waiver. A provision of these Terms may be waived only by a written instrument
          executed by the party entitled to the benefit of such provision. The failure of any party
          at any time to require performance of any provision of these Terms will in no manner
          affect such party’s right at a later time to enforce the same. A waiver of any breach of
          any provision of these Terms will not be construed as a continuing waiver of other
          breaches of the same or other provisions of these Terms. Further, in the event we choose
          to grant an exception to these Terms, any such exception is in our sole discretion and
          does not entitle you or anyone else to any exceptions in the future for similar
          circumstances.
          {'\n'}
          {'\n'}h) Notices. Notices will be sent to you at the email address that you provided to
          BrackettUp during the registration process. Notices may be sent to us here. Notice will be
          deemed given 24 hours after email is sent, unless the sender receives an automatic,
          electronic notification that such notice was not successfully received. Without prejudice
          to the foregoing, we may serve you legal notice by post to the address provided during the
          registration process. In such case, notice will be deemed given three days after the date
          of posting.
          {'\n'}
          {'\n'}Appendix 1 (Model Cancellation Form)
          {'\n'}
          {'\n'}(Complete and return this form only if you wish to withdraw from the contract)
          {'\n'}
          {'\n'}To: BrackettUp at: F-197 2nd floor, pandav nagar, Delhi-110091, Attention:
          BrackettUp Customer Support – Cancellation Notice. Contact us here.
          {'\n'}
          {'\n'}I hereby give notice that I cancel my contract for the supply of the following
          service: the BrackettUp subscription service.
          {'\n'}
          {'\n'}Ordered on: [*]
          {'\n'}Name of consumer: [*]
          {'\n'}Address of consumer: [*]
          {'\n'}Signature of consumer: (sign only if this form is notified on paper instead of via
          electronic mail).
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#f8f8f8',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    padding: 10,
  },
  iconStyle: {
    color: '#000',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    padding: 17,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  text: {
    textAlign: 'justify',
    color: 'black',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
  iconstyle: {
    size: 25,
    color: '#000',
  },
});

export default TermsAndConditions;
