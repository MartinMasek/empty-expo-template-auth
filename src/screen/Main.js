import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import { DETAIL } from '../routes/constants';

export class Main extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Main'
        };
    };

    render() {
        return (
            <View>
                <Text onPress={this.props.navigateToDetail}>Go to detail</Text>
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        navigateToDetail: () => ownProps.navigation.navigate(DETAIL),
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)