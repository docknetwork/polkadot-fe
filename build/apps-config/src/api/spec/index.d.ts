declare const _default: {
    'centrifuge-chain': {
        AnchorData: {
            id: string;
            docRoot: string;
            anchoredBlock: string;
        };
        Fee: {
            key: string;
            price: string;
        };
        PreCommitData: {
            signingRoot: string;
            identity: string;
            expirationBlock: string;
        };
        Proof: {
            leafHash: string;
            sortedHashes: string;
        };
    };
    edgeware: {
        'voting::VoteType': string;
        'voting::TallyType': string;
        'voting::Tally': string;
        Address: string;
        Keys: string;
        StakingLedger: string;
        Votes: string;
        ReferendumInfo: string;
        Weight: string;
    };
    'encointer-node': {
        Address: string;
        LookupSource: string;
        CeremonyPhaseType: {
            _enum: string[];
        };
        CeremonyIndexType: string;
        ParticipantIndexType: string;
        MeetupIndexType: string;
        AttestationIndexType: string;
        CurrencyIdentifier: string;
        BalanceType: string;
        BalanceEntry: {
            principal: string;
            last_update: string;
        };
        CurrencyCeremony: {
            cid: string;
            cindex: string;
        };
        Location: {
            lat: string;
            lon: string;
        };
        Reputation: {
            _enum: string[];
        };
        CurrencyPropertiesType: {
            name_utf8: string;
            demurrage_per_block: string;
        };
        ClaimOfAttendance: {
            claimant_public: string;
            ceremony_index: string;
            currency_identifier: string;
            meetup_index: string;
            location: string;
            timestamp: string;
            number_of_participants_confirmed: string;
        };
        Attestation: {
            claim: string;
            signature: string;
            public: string;
        };
        ProofOfAttendance: {
            prover_public: string;
            ceremony_index: string;
            currency_identifier: string;
            attendee_public: string;
            attendee_signature: string;
        };
        Weight: string;
    };
    'encointer-node-notee': {
        Address: string;
        LookupSource: string;
        CeremonyPhaseType: {
            _enum: string[];
        };
        CeremonyIndexType: string;
        ParticipantIndexType: string;
        MeetupIndexType: string;
        AttestationIndexType: string;
        CurrencyIdentifier: string;
        BalanceType: string;
        BalanceEntry: {
            principal: string;
            last_update: string;
        };
        CurrencyCeremony: {
            cid: string;
            cindex: string;
        };
        Location: {
            lat: string;
            lon: string;
        };
        Reputation: {
            _enum: string[];
        };
        CurrencyPropertiesType: {
            name_utf8: string;
            demurrage_per_block: string;
        };
        ClaimOfAttendance: {
            claimant_public: string;
            ceremony_index: string;
            currency_identifier: string;
            meetup_index: string;
            location: string;
            timestamp: string;
            number_of_participants_confirmed: string;
        };
        Attestation: {
            claim: string;
            signature: string;
            public: string;
        };
        ProofOfAttendance: {
            prover_public: string;
            ceremony_index: string;
            currency_identifier: string;
            attendee_public: string;
            attendee_signature: string;
        };
        Weight: string;
    };
    'encointer-node-teeproxy': {
        Address: string;
        LookupSource: string;
        CeremonyPhaseType: {
            _enum: string[];
        };
        CeremonyIndexType: string;
        CurrencyIdentifier: string;
        CurrencyCeremony: {
            cid: string;
            cindex: string;
        };
        Location: {
            lat: string;
            lon: string;
        };
        CurrencyPropertiesType: {
            name_utf8: string;
            demurrage_per_block: string;
        };
        ShardIdentifier: string;
        Request: {
            shard: string;
            cyphertext: string;
        };
        Enclave: {
            pubkey: string;
            mrenclave: string;
            timestamp: string;
            url: string;
        };
        Weight: string;
    };
    kulupu: {
        Difficulty: string;
        DifficultyAndTimestamp: {
            difficulty: string;
            timestamp: string;
        };
        Era: {
            genesisBlockHash: string;
            finalBlockHash: string;
            finalStateRoot: string;
        };
    };
    'node-template': {
        Address: string;
        LookupSource: string;
    };
    'stable-poc': {
        AccountData: {
            free: string;
            reserved: string;
            miscFrozen: string;
            feeFrozen: string;
            txCount: string;
            sessionIndex: string;
        };
        TemplateAccountData: {
            txCount: string;
            sessionIndex: string;
        };
        TxCount: string;
    };
    stable_poc: {
        AccountData: {
            free: string;
            reserved: string;
            miscFrozen: string;
            feeFrozen: string;
            txCount: string;
            sessionIndex: string;
        };
        TemplateAccountData: {
            txCount: string;
            sessionIndex: string;
        };
        TxCount: string;
    };
};
export default _default;
