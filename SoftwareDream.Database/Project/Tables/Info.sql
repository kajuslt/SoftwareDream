CREATE TABLE [Project].[Info] (
    [Id]                   INT           IDENTITY (1, 1) NOT NULL,
    [ProjectId]            INT           NULL,
    [Title]                VARCHAR (100) NULL,
    [ShortDescription]     VARCHAR (360) NULL,
    [TechnicalDescription] VARCHAR (MAX) NULL,
    [AnalysisDocumentId]   INT           NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([ProjectId]) REFERENCES [Project].[Main] ([Id])
);

