CREATE TABLE [Project].[Main] (
    [Id]                     INT             IDENTITY (1, 1) NOT NULL,
    [CreatedByUserId]        INT             NULL,
    [StateId]                INT             NULL,
    [LikeCounterId]          INT             NULL,
    [LikesRequiredTotal]     INT             NULL,
    [DonationsId]            INT             NULL,
    [DonationsRequiredTotal] NUMERIC (17, 2) NULL,
    [IconId]                 INT             NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([StateId]) REFERENCES [Classifications].[ProjectState] ([Id])
);

