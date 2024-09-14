import React, { useRef, useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { ExpandableCalendar, AgendaList, CalendarProvider } from 'react-native-calendars';
import AgendaItem from '../modals/AgendaModal';
import { getTheme, themeColor } from '../theme/theme';
import { renderHeader } from '../modals/HeaderModal';
import { useNavigation, useRoute } from '@react-navigation/native';
import isEmpty from 'lodash/isEmpty';
import { fetchActivitySchedule, fetchOrganizationSchedule } from '../apis/CommonApi';

const ScheduleScreen = () => {
  const route = useRoute();
  const referenceType = route.params[0];
  const referenceId = route.params[1];
  const navigation = useNavigation();
  const theme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: themeColor,
  });

  const [items, setItems] = useState([]);
  const [marked, setMarked] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        var fetchedItems;
        if (referenceType == 'activity') {
          console.log(referenceId);
          fetchedItems = await fetchActivitySchedule(referenceId);
        } else {
          fetchedItems = await fetchOrganizationSchedule(referenceId);
        }
        setItems(fetchedItems);
        setMarked(getMarkedDates(fetchedItems));
      } catch (error) {
        console.error('Error fetching activity schedule:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [referenceId]);

  function getMarkedDates(items) {
    const marked = {};
    items.forEach(item => {
      // NOTE: only mark dates with data
      if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
        marked[item.title] = { marked: true };
      } else {
        marked[item.title] = { disabled: true };
      }
    });
    return marked;
  }

  const renderItem = useCallback(({ item }) => {
    return <AgendaItem item={item} />;
  }, []);

  // Get the current date in the format YYYY-MM-DD
  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <View style={styles.container}>
      {renderHeader(navigation, 'Schedule')}
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={themeColor} />
        </View>
      ) : (
        <CalendarProvider
          date={currentDate} // Set the date to the current date
          showTodayButton
          theme={todayBtnTheme.current}
        >
          <ExpandableCalendar
            //testID={testIDs.expandableCalendar.CONTAINER}
            // horizontal={false}
            hideArrows
            // disablePan
            // hideKnob
            // initialPosition={ExpandableCalendar.positions.OPEN}
            calendarStyle={styles.calendar}
            // headerStyle={styles.header} // for horizontal only
            // disableWeekScroll
            theme={theme.current}
            // disableAllTouchEventsForDisabledDays
            firstDay={1}
            markedDates={marked}
            // animateScroll
            // closeOnDayPress={false}
          />
          <AgendaList
            sections={items}
            renderItem={renderItem}
            // scrollToNextEvent
            sectionStyle={styles.section}
            // dayFormat={'yyyy-MM-d'}
          />
        </CalendarProvider>
      )}
    </View>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  calendar: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    backgroundColor: 'lightgrey',
  },
  section: {
    backgroundColor: '#f8f8f8',
    color: 'black',
    textTransform: 'capitalize',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
