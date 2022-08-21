import { validate } from 'class-validator';
import { BuddySavings } from "../entity/BuddySavings";
import { AppDataSource } from "../data-source";

const buddySavingsRepository = AppDataSource.getRepository(BuddySavings);

export const createSavings = (async(details, user) => {
    const buddysavings = new BuddySavings();

    buddysavings.title = details.title;
    buddysavings.no_of_friends = details.no_of_friends;
    buddysavings.do_you_or_your_buddies_have_a_target = details.do_you_or_your_buddies_have_a_target;
    buddysavings.target = details.target;
    buddysavings.plan_to_save = details.plan_to_save;
    buddysavings.frequency = details.frequency;
    buddysavings.start_when = details.start_when;
    buddysavings.how_long_do_you_want_to_save_for = details.how_long_do_you_want_to_save_for;
    buddysavings.start_date = details.start_date;
    buddysavings.end_date = details.end_date;
    buddysavings.relationship_with_buddies = details.relationship_with_buddies;
    buddysavings.buddies = buddysavings.buddies;
    buddysavings.user = user;

    const errors = await validate(buddysavings);
    
    if (errors.length > 0) throw new Error();

    await buddySavingsRepository.manager.save(buddysavings);

    return buddysavings;
});